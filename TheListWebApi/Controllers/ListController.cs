using Core.Application;
using Core.Data.Dtos;
using Core.Data.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace TheListWebApi.Controllers
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    public class ListController : ControllerBase
    {
        private readonly IRepositoryWrapper repository;

        public ListController(IRepositoryWrapper repositorywrapper)
        {
            repository = repositorywrapper;
        }

        [HttpGet(Name = "GetMyLists")]
        public IEnumerable<List> GetMyLists(Guid userId)
        {
            return repository.List.GetMyLists(userId);
        }

        [HttpGet( Name = "GetListById")]
        public PayloadCustom<List> GetListById(Guid listId)
        {
            try
            {
                var list = repository.List.GetListById(listId);
                return new PayloadCustom<List>() { Entity = list, Status = 0 };
            }
            catch
            {
                return new PayloadCustom<List>() { Entity = null, Status = 500 };
            }
        }

        [HttpPost]
        public PayloadCustom<List> CreateList([FromBody] List list)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    if (list.Id == Guid.Empty)
                    {
                        repository.List.CreateList(list);

                    }
                    else
                    {
                        repository.List.UpdateList(list);
                    }
                    repository.Save();
                    return new PayloadCustom<List>() { Entity = list, Status = 0 };
                }

                return new PayloadCustom<List>() { Entity = null, Status = 9 };

            }
            catch
            {
                return new PayloadCustom<List>() { Entity = null, Status = 500 };

            }

        }
        [HttpPost]
        public PayloadCustom<List> BuyItems(BuyItemsDto dto)
        {
            try
            {
                var list = repository.List.BuyItems(dto);
                repository.Save();

                return new PayloadCustom<List>() { Entity = list, Status = 0 };
            }
            catch
            {
                return new PayloadCustom<List>() { Entity = null, Status = 500 };
            }
        }

    }
}
