using Core.Application;
using Core.Data.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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

        [HttpGet("{id}", Name = "GetListById")]
        public Task<Product> GetProductById(Guid id)
        {
            return repository.Product.GetProductById(id);
        }

        // POST api/<UsersController>
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

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
