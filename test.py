from django.conf import settings
from django.contrib.auth.hashers import make_password

# Cấu hình Django settings thủ công
settings.configure(
    PASSWORD_HASHERS=[
        'django.contrib.auth.hashers.PBKDF2PasswordHasher',
    ]
)

# Bây giờ gọi make_password bình thường
hashed = make_password("123", hasher='pbkdf2_sha256')
print(hashed)
