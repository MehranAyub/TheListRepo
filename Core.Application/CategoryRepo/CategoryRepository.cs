using Core.Data;
using Core.Data.BaseRepository;
using Core.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Application.CategoryRepo
{
    public class CategoryRepository : RepositoryBase<Category>, ICategoryRepository
    {
        public CategoryRepository(RepositoryContext repositoryContext) : base(repositoryContext)
        {

        }
        public void CreateCategory(Category category)
        {
            Create(category);
        }
    }
}
 
