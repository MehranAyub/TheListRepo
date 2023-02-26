using Core.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Application.CategoryRepo
{
    public interface ICategoryRepository
    {
        void CreateCategory(Category category);
    }
}
