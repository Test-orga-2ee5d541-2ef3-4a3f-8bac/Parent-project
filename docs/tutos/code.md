# Block de code

Après les backticks, on indique le langage 

```py title="add_numbers.py" linenums="1"
# Function to add two numbers
def add_two_numbers(num1, num2):
    return num1 + num2

# Example usage
result = add_two_numbers(5, 3)
print('The sum is:', result)
```

```java title="UserDto.java"  linenums="12"
public record UserDto(
    Long id,
    String username,
    String email
) {}
```

```yaml title="conf.yml" linenums="1" hl_lines="5-6"
services:
  app:
    image: my-app:latest
    container_name: app_service
    ports:
      - "8080:8080"
```

```dockerfile title="Dockerfile" 
FROM eclipse-temurin:21-jdk-alpine AS builder
WORKDIR /workspace
COPY . .
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=builder /workspace/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
```

```ts title="file.ts" 
interface User {
    id: number;
    username: string;
    email: string;
    isActive?: boolean;
}

const formatUserSummary = (user: User): string => {
    const status = user.isActive ?? true ? 'Actif' : 'Inactif';
    return `${user.username} - ${user.email} (${status})`;
};

const currentUser: User = {
    id: 1,
    username: 'dev_user',
    email: 'user@example.com'
};

console.log(formatUserSummary(currentUser));
```