using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Data.Dtos
{
    public class BuyItemsDto
    {
        public Guid ListId { get; set; }
        public List<Guid>? ItemIds { get; set; }
        public List<Guid>? LinkIds { get; set; }

    }
}
