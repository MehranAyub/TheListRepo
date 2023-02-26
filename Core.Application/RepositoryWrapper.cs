using Core.Application.CategoryRepo;
using Core.Application.ListRepo;
using Core.Application.ProductRepo;
using Core.Application.UserRepo;
using Core.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Application
{
    public class RepositoryWrapper:IRepositoryWrapper
    {
      private  RepositoryContext _repositoryContext;
      private  IUserRepository _userRepository;
      private IListRepository _listRepository;
      private IProductRepositorty _productRepository;
      private ICategoryRepository _categoryRepository;

        public RepositoryWrapper(RepositoryContext repositoryContext)
        {
            _repositoryContext = repositoryContext;
        }
        public IUserRepository User
        {
            get {
                if (_userRepository == null)
                {
                    _userRepository = new UserRepository(_repositoryContext);
                }
                return _userRepository; }
        }
        public IListRepository List
        {
            get
            {
                if (_listRepository == null)
                {
                    _listRepository = new ListRepository(_repositoryContext);
                }
                return _listRepository;
            }
        }
        public IProductRepositorty Product
        {
            get
            {
                if(_productRepository == null)
                {
                    _productRepository=new ProductRepository(_repositoryContext);
                }
                return _productRepository;
            }
        }
        public ICategoryRepository Category
        {
            get
            {
                if (_categoryRepository == null)
                {
                    _categoryRepository = new CategoryRepository(_repositoryContext);
                }
                return _categoryRepository;
            }
        }
        public void Save()
        {
            _repositoryContext.SaveChanges();
        }

    }
}
