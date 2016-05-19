# Eg. User name="admin", Password="admin" for this code sample.
$user = "admin"
$pass = "admin"

# Build auth header
$base64AuthInfo = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes(("{0}:{1}" -f $user, $pass)))

# Set proper headers
$headers = New-Object "System.Collections.Generic.Dictionary[[String],[String]]"
$headers.Add('Authorization',('Basic {0}' -f $base64AuthInfo))
$headers.Add('Accept','application/json')
$headers.Add('Content-Type','application/json')

# Specify endpoint uri
$uri = "https://<instance_name>/api/sn_k16_install/setup/user"

# Specify HTTP method
$method = "post"

# Specify request body
{request.body ? "$body = \"" :""}}{\"username\":\"itest1\",\"password\":\"tester1\",\"displayName\":\"Test User\"}"

# Send HTTP request
$response = Invoke-WebRequest -Headers $headers -Method $method -Uri $uri -Body $body

# Print response
$response.RawContent