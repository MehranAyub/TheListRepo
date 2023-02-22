using Core.Application;
using Core.Data.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TheListWebApi.Controllers
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IRepositoryWrapper repository;

        public ProductsController(IRepositoryWrapper repositorywrapper)
        {
            repository = repositorywrapper;
        }

        
        [HttpGet(Name = "GetAllProducts")]
        public IEnumerable<Product> GetAllProducts()
        {
            var data= repository.Product.GetAllProducts();
            return data;
        }

        [HttpGet("{id}", Name = "GetProductById")]
        public Task<Product> GetProductById(Guid id)
        {
            return repository.Product.GetProductById(id);
        }

        // POST api/<UsersController>
        [HttpPost("CreateProduct")]
        public PayloadCustom<Product> CreateProduct([FromBody] Product product)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    repository.Product.CreateProduct(product);
                    repository.Save();
                    return new PayloadCustom<Product>() { Entity = product, Status = 0 };
                }

                return new PayloadCustom<Product>() { Entity = null, Status = 9 };

            }
            catch
            {
                return new PayloadCustom<Product>() { Entity = null, Status = 500 };

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
