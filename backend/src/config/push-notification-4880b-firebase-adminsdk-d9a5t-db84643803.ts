export interface IServiceAccount {
  type: string;
  project_id: string;
  private_key_id: string;
  private_key: string;
  client_email: string;
  client_id: string;
  auth_uri: string;
  token_uri: string;
  auth_provider_x509_cert_url: string;
  client_x509_cert_url: string;
  universe_domain: string;
}

export const serviceAccount: IServiceAccount = {
  type: "service_account",
  project_id: "push-notification-4880b",
  private_key_id: "db84643803388a955db552a80d30150c1ee94c88",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEugIBADANBgkqhkiG9w0BAQEFAASCBKQwggSgAgEAAoIBAQCThYeFXlYw7qTP\ngywm4PjlpU1yWJY1Npeau27zo6bFl7F02Z0oHWuCirHsNwNNm+zuCFbysbtIU5qM\nJwS2IdvNjryQmHZY18QG6NX8PpPlQ08FceV6qa544JLoGfit/FjfSQd54/TOjje1\nCTVuIYXutf1B5sQq80eyXs3BaUGTY3Itb89wEFyhhoDEMB+ssHL5gMifOnEiZ3k/\nmIxk2Df566JS2zFIQVq+/pHKZJnyBPwiUlNpDNJLek5VjTGPX1FBySYRHzCsdvFn\n3VdoXQcLytS28DNTWej74g2C4PUIIueSwZPus4Gcw1tB/Wb7aBj3W3Zu3gx9DD0S\nmSidFYmhAgMBAAECgf8VFKZ9MkrLMj6DOVvuF4VpR4LUiGGgK6MmtshK1hmEiSMg\noJc8XIhqRdw0chFc9tDiIGaznWC7E56YVPC+IHZyUiufACI3xIjfK6N9KMzfzm6G\nLtvOKfqHQjFIbkBAygb/3T2sg5jMN/DNdbeMYsET8tPlvrG4GL5Q9Bs4I6Fg+ytp\nUyigiVU2V8f8V3Ocb52CkLbsR3xIXcbefOjjGBD+sw3Gou0+oDmXzgOA+ymal3qe\ns4PnYDkciqVQ44EA2I7LmkHO6KDDV2NkjR9mS/pxS1Z4tnfsgieLFIZj9weih/vt\nZ9WfQzJywGLHUtrxjA3f3IgCXO/JDmQAKBHKrYECgYEAw8pUL9fjpnPMJjwPLqOG\nLYv3jv7xkOjkUFrMkmRF7MhX5GEAbe7HQxHwJ9xi2XTGyYTw2H47bWGvKnJsCUs1\nyL06+oEEBJAuc9ZNEbm0k7er9TuINGtuK7z1u7GHoQyJ8lu9S+5Lp74B350zqiSC\nd82e84SdAFcGtkjnvMksvOECgYEAwOM5fozHHSbeY+oD5K7sVK0SuMi/zYVPjrC+\n6G/crNoFgtVAWgAusoYXletkET6dFzAlkxHXoYcHkqYQ/luW0/vSVDLxs7vE9KSf\nz4OgUV+PUU/ok/PAIbtpaIa27oVLHuZE8VYOvKTVS6IUk/zXVtoa9vliZdeZfjUN\nx3G7pMECgYBOjYDVaTLG97KyrGoS9jzBTWTXlGXrE+V2b9ef7Gc5pu/MizaW5LRB\nrpLCC2QFhxqyg4n18j95lTWoPBwoZmp/zZw6IUUxZ3+briFhuTZABfMSAv6UuX2M\nQtX8pi+aZ+N4v2Hlcwgblto9k17FJrzJwE/DuDMdjcz9maaQUc6HQQKBgBUnFgAF\nyjQtNgg4+pJSiIJEtJ/lC/uq2e2o/laZJdci1aXiYvs7t+NGB0IenUuy1SFc21IE\ni+Qf3bm8UnLCcojuvcMUDyOJvPCjOQ9VvPgPhbUCEVxgR7qrRcT7uQXxQiqyT+8z\nY8xWOznfHWiZOrhAlOJuuNa4TRHlGYy8sTpBAoGAWmhMmt5aJibV5ngTWQFWKgtT\nZLQPZ4B/ZpLYlwVdefgQVoM+iP8kQUR0p5dajZoGrGih2TZ7+KZ5D8Lh4ECNn1t1\nTJgLtzHUfXw8Y9F6bqbBb5MfJwssdydmMtAv4P40bsThsrKoySBz2geBx9HyHRe0\nO+PscHBR4la0k0Xh+GU=\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-d9a5t@push-notification-4880b.iam.gserviceaccount.com",
  client_id: "111308517957572775784",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-d9a5t%40push-notification-4880b.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};
