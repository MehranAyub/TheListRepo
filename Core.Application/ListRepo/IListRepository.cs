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
        IEnumerable<List> GetMyLists(Guid userId);
        List GetListById(Guid id);

        List UpdateList(List list);
        void CreateList(List list);
    }
}
