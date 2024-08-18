using System;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Net.Http;
using PreqinAssignment.Data;
using PreqinAssignment.Model;
using Microsoft.EntityFrameworkCore;
using System.Net;
using Newtonsoft.Json;
using System.Text.RegularExpressions;

namespace PreqinAssignment.Controller
{
    [ApiController]
    [Route("Commitments")]
    public class CommitmentController : ControllerBase
	{
        private readonly CommitmentDbContext _commitmentDbContext;
        private readonly AssetDbContext _assetDbContext;


        public CommitmentController(CommitmentDbContext commitmentDbContext, AssetDbContext assetDbContext)
            
		{
            _commitmentDbContext = commitmentDbContext;
            _assetDbContext = assetDbContext;
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<CommitmentResponse>>> Get(string id)


        {

            var assetDb = await _assetDbContext.Assets.ToListAsync();

            var commitmentDb = await _commitmentDbContext.commitments.ToListAsync();
            var filteredCommitments = commitmentDb.Where(commitment => commitment.investor_id == id).ToList(); //filter commitment details by investor id
            // Group commitments by asset and calculate total commitment
            var assetData = commitmentDb.GroupBy(x => new { x.investor_id, x.asset_id })
                            .Select(g => new
                            {
                                InvestorId = g.Key.investor_id,
                                assetId = g.Key.asset_id,
                                TotalCommitment = g.Sum(x => decimal.Parse(x.commitment_amount))

                            }) ;

            


            // Map commitments to response model objects
            var commitmentResponse = filteredCommitments.Select(i => new CommitmentResponse
            {
                Id = i.investor_id,
                AssetId = i.asset_id,
                Currency = i.commitment_currency,
                Amount = i.commitment_amount,
                AssetClass = assetDb.Where(a => a.asset_id == i.asset_id).FirstOrDefault().commitment_asset_class.ToString(),
                //AssetValues =  assetData.SingleOrDefault(c => c.assetId == i.asset_id && c.InvestorId == i.investor_id).TotalCommitment.ToString()
                AssetValues = assetData.SingleOrDefault(c => c.assetId == i.asset_id && c.InvestorId == i.investor_id).TotalCommitment.ToString() 

        }).ToList();

            return Ok(commitmentResponse);
        }
    }
}






    






