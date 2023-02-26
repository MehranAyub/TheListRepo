using Core.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Application.ProductRepo
{
    public interface IProductRepositorty
    {
        IEnumerable<Product> GetAllProducts(string search);
        Task<Product> GetProductById(Guid id);
        void CreateProduct(Product product);
    }
}
