using System;

namespace API.ExceptionHandler;

public class NotFoundException : Exception
{
	public NotFoundException()
	{
	}

	public NotFoundException(string message) : base(message)
	{
	}
}
