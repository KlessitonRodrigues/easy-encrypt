type AppClient = {
  text: {
    encrypt: (args: TextEncryptArgs) => string;
    decrypt: (args: TextDecryptArgs) => string;
  };
};

// Controllers

type TextEncryptArgs = {
  text: string;
  password: string;
  usePrivateKey?: boolean;
};

type TextDecryptArgs = {
  text: string;
  password: string;
  usePrivateKey?: boolean;
};
