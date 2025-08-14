namespace API.Entities;

public class Product
{
	public int Id { get; init; }
	public required string Name { get; init; }
	public required string Description { get; init; }
	public long Price { get; init; }
	public required string PictureUrl { get; init; }
	public required string Brand { get; init; }
	public required string Type { get; init; }
	public int QuantityInStock { get; init; }
}
