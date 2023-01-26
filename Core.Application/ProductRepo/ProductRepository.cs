using Core.Data;
using Core.Data.BaseRepository;
using Core.Data.Entities;
using Grpc.Core;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Application.ProductRepo
{
    internal class ProductRepository : RepositoryBase<Product>, IProductRepositorty
    {
        public ProductRepository(RepositoryContext repositoryContext) : base(repositoryContext)
        {
        }

        public IEnumerable<Product> GetAllProducts()
        {
            return GetAll().ToList();
        }

        public async Task<Product> GetProductById(Guid id)
        {
            return await FindByCondition(Product => Product.Id.Equals(id)).FirstOrDefaultAsync();
        }
        public void CreateProduct(Product product)
        {
           Create(product);
        }
    }
}
