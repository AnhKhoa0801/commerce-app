namespace API.ExceptionHandler;

public class NotFoundException(string message) : Exception(message)
{
}
