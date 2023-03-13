using Core.Application;
using Core.Data.Entities;
using Grpc.Core;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TheListWebApi.Controllers
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IRepositoryWrapper repository;

        public UsersController(IRepositoryWrapper repositorywrapper)
        {
            repository = repositorywrapper;
        }

        [HttpGet("{id}",Name = "GetUserById")]
        public  Task<User> GetUserById(Guid id)
        {
            return  repository.User.GetUserById(id);
        }

        [HttpGet(Name = "ValidateUser")]
        public PayloadCustom<User> ValidateUser(string email,string password)
        {
            
            try
            {
                var user = repository.User.ValidateUser(email,password);
                if(user!=null) return new PayloadCustom<User>() { Entity =new User { Id=user.Id,FName=user.FName}, Status = 0 };
                return new PayloadCustom<User>() { Entity = new User{ Email=email,Password=password}, Status = 404 };
            }
            catch
            {
                return new PayloadCustom<User>() { Entity = null, Status = 500 };
            }
        }

        [HttpPost]
        public PayloadCustom<User> CreateUser([FromBody] User user)
        {
            try
            {
                if (ModelState.IsValid)
                {   
                  bool result=  repository.User.CreateUser(user);
                    if (result == true)
                    {
                        repository.Save();
                        return new PayloadCustom<User>() { Entity = new User { Id = user.Id, FName = user.FName }, Status = 0 };

                    }
                    return new PayloadCustom<User>() { Entity = null, Status = 404 };

                }

                return new PayloadCustom<User>() { Entity = null, Status = 9 };
              
            }
            catch 
            {
                return new PayloadCustom<User>() { Entity = null, Status = 500 };

            }

        }

    }
}
