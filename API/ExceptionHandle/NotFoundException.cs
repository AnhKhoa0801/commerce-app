using System;

namespace API.ExceptionHandle;

public class NotFoundException : Exception
{
	public NotFoundException()
	{
	}

	public NotFoundException(string message) : base(message)
	{
	}
}
