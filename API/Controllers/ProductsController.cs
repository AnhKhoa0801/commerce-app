using API.Data;
using API.ExceptionHandler;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class ProductsController(StoreContext context) : BaseApiController
{
    [HttpGet]
    public async Task<IActionResult> GetProducts()
    {
        var products = await context.Products.ToListAsync();
        return Ok(products);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetProduct(int id)
    {
        var product = await context.Products.FindAsync(id);

        if (product is null)
        {
            throw new NotFoundException("Product not found");
        }

        return Ok(product);
    }
}
