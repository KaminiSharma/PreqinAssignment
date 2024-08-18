using System;
namespace PreqinAssignment.Model
{
	public class CommitmentResponse
	{
        public string Id { get; set; }
        public string AssetId { get; set; }
        public string Currency { get; set; }
        public string Amount { get; set; }

        // The below properties comes from Asset table
        public string AssetClass { get; set; }
        public string AssetValues { get; set; }




    }
}

