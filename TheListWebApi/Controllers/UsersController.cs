using Core.Application;
using Core.Data.Entities;
using Grpc.Core;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TheListWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IRepositoryWrapper repository;

        public UsersController(IRepositoryWrapper repositorywrapper)
        {
            repository = repositorywrapper;
        }

        [HttpGet(Name = "GetAllUsers")]
        public IEnumerable<User> GetAllUsers()
            {
            return repository.User.GetAllUsers();
        }

        // GET api/<UsersController>/5
        [HttpGet("{id}",Name = "GetUserById")]
        public  Task<User> GetUserById(Guid id)
        {
            return  repository.User.GetUserById(id);
        }

        // POST api/<UsersController>
        [HttpPost("CreateUser")]
        public PayloadCustom<User> CreateUser([FromBody] User user)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    repository.User.CreateUser(user);
                    repository.Save();
                    return new PayloadCustom<User>() { Entity = user, Status = 0 };
                }
              
                    return new PayloadCustom<User>() { Entity = null, Status = 9 };
              
            }
            catch 
            {
                return new PayloadCustom<User>() { Entity = null, Status = 500 };

            }

        }

        // PUT api/<UsersController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UsersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
