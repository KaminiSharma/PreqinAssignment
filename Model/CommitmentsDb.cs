using System;
using Microsoft.AspNetCore.Http.HttpResults;

namespace PreqinAssignment.Model
{
	public class CommitmentsDb
    {
        public string commitment_id { get; set; }
        public string investor_id { get; set; }
		public string asset_id { get; set; }
		public string commitment_amount { get; set; }
		public string commitment_currency { get; set; }

	}
}

