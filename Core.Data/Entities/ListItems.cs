using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Data.Entities
{
    public class ListItems
    {
        public Guid Id { get; set; }
        public string? Title { get; set; } = String.Empty;
        public string Price { get; set; } = String.Empty;
        public string? StoreLink { get; set; }
        public string? Image { get; set; }
        public bool IsBought { get; set; }    
        public Guid ListId { get; set; }
        public List? List { get; set; }

    }
}
