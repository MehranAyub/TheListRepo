using Core.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Application.ListRepo
{
    public interface IListRepository
    {
        IEnumerable<List> GetAllLists();
        List GetListById(Guid id);
        void CreateList(List list);
    }
}
