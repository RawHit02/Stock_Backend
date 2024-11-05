export class EnvKeyConstants {
  /**
   * App General configuration
   */
  public static readonly APP_NAME = 'APP_NAME';
  public static readonly APP_ROUTE_PREFIX = 'APP_ROUTE_PREFIX';
  public static readonly APP_ENV = 'APP_ENV';
  public static readonly PORT = 'PORT';
  public static readonly APP_DEBUG = 'APP_DEBUG';
  public static readonly APP_REPOSITORY_TYPE = 'APP_REPOSITORY_TYPE';
  public static readonly API_VERSION = 'API_VERSION';
  public static readonly API_DOC_URL = 'API_DOC_URL';

  /**
   * Database connection detail
   */
  public static readonly DATABASE_TYPE = 'DATABASE_TYPE';
  public static readonly DATABASE_HOST = 'DATABASE_HOST';
  public static readonly DATABASE_PORT = 'DATABASE_PORT';
  public static readonly DATABASE_USERNAME = 'DATABASE_USERNAME';
  public static readonly DATABASE_PASSWORD = 'DATABASE_PASSWORD';
  public static readonly DATABASE_NAME = 'DATABASE_NAME';

  /**
   * AWS environment configuration
   */
  public static readonly SM_REGION = 'SM_REGION';
  public static readonly SM_ACCESS_KEY_ID = 'SM_ACCESS_KEY_ID';
  public static readonly SM_SECRET_ACCESS_KEY = 'SM_SECRET_ACCESS_KEY';
  public static readonly IMAGE_BUCKET = 'IMAGE_BUCKET';
  public static readonly FILE_PREVIEW_BASE_URL = 'FILE_PREVIEW_BASE_URL';

  /**
   * Secrets
   */
  public static readonly DB_SECRET = 'DB_SECRET';

  /**
   * Dapr configuration
   */
  public static readonly DAPR_HOST = 'DAPR_HOST';
  public static readonly DAPR_HTTP_PORT = 'DAPR_HTTP_PORT';
  public static readonly DAPR_GRPC_PORT = 'DAPR_GRPC_PORT';
  public static readonly DAPR_SECRET_STORE_NAME = 'DAPR_SECRET_STORE_NAME';
  public static readonly DAPR_SECRET_KEY = 'DAPR_SECRET_KEY';


  public static readonly JWT_SECRET = 'A1D60B59DF3D4EE3A976EA0BF0D3D766';
  public static readonly ENCRYPTION_KEY = '74B7FA90143C4021A09E1B3248571ABF';
  public static readonly AUDIENCE = [];
  public static readonly ISSUER = [];

  public static readonly MSG_BASE_URL = 'MSG_BASE_URL';
  public static readonly MSG_API_KEY = 'MSG_API_KEY';
  public static readonly MSG_OTP_EXPIRY = 'MSG_OTP_EXPIRY';
  public static readonly MSG_SEND_OTP_ENDPOINT = 'MSG_SEND_OTP_ENDPOINT';
  public static readonly MSG_VERIFY_OTP_ENDPOINT = 'MSG_VERIFY_OTP_ENDPOINT';
  public static readonly MSG_RESEND_OTP_ENDPOINT = 'MSG_RESEND_OTP_ENDPOINT';
  public static readonly MSG_SEND_EMAIL_ENDPOINT = 'MSG_SEND_EMAIL_ENDPOINT';
  public static readonly MSG_EMAIL_SENDER_NAME = 'MSG_EMAIL_SENDER_NAME';
  public static readonly MSG_SEND_EMAIL_BCC_EMAIL = 'MSG_SEND_EMAIL_BCC_EMAIL';
  public static readonly MSG_EMAIL_SENDER_EMAIL = 'MSG_EMAIL_SENDER_EMAIL';
  public static readonly MSG_EMAIL_DOMAIN_SETTING = 'MSG_EMAIL_DOMAIN_SETTING';

  // Hyperverge
  public static readonly HYPREVERGE_WEBHHOK_END_POINT = 'HYPREVERGE_WEBHHOK_END_POINT';
  public static readonly APP_ID = 'APP_ID';
  public static readonly APP_KEY = 'APP_KEY';
  public static readonly HYPERVERGE_WEBHOOK_URL = 'HYPERVERGE_WEBHOOK_URL';

  
  // RazorPay
  public static readonly RAZOR_PAY_BASE_URL = 'RAZOR_PAY_BASE_URL';

}
