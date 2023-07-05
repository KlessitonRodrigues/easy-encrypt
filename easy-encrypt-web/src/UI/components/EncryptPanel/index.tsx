import { useState } from 'react';
import { RxCopy, RxLockClosed, RxLockOpen2 } from 'react-icons/rx';
import Button from 'src/UI/base/Button';
import CheckOption from 'src/UI/base/CheckOption';
import Input from 'src/UI/base/Input';
import TextArea from 'src/UI/base/TextArea';

import { copyToClipboard } from './services/copyText';
import { initialData, onDecrypt, onEncrypt } from './services/handleForm';
import { Container, InputPassword, InputText, Options, OptionsTitle, ResultText } from './styled';

const EncryptPanel = (props: EncryptPanelProps) => {
  const { lang } = props;
  const home = lang.text.page.home;
  const [form, setform] = useState(initialData);

  return (
    <Container>
      <InputText>
        <TextArea
          label={home.textInput}
          value={form.inputText}
          placeHolder={home.textInputPlaceholder}
          onChange={inputText => setform({ ...form, inputText })}
        />
      </InputText>

      <InputPassword>
        <OptionsTitle>{home.encryptType}</OptionsTitle>
        <Options>
          <CheckOption
            title={home.encryptTypeCheckbox1}
            description={home.encryptTypeCheckbox1Items}
            checked={!form.usePrivateKey}
            onChange={() => setform({ ...form, usePrivateKey: false })}
          />
          <CheckOption
            title={home.encryptTypeCheckbox2}
            description={home.encryptTypeCheckbox2Items}
            checked={form.usePrivateKey}
            onChange={() => setform({ ...form, usePrivateKey: true })}
          />
        </Options>

        <Input
          label={home.passwordInput}
          value={form.password}
          placeHolder={home.passwordInputPlaceholder}
          onChange={password => setform({ ...form, password })}
        />

        <Button
          label={home.encryptButton}
          variant="solid"
          iconLeft={<RxLockClosed />}
          onChange={() => setform(onEncrypt(form))}
          disabled={!form.inputText}
        />
        <Button
          label={home.decryptButton}
          variant="solid"
          color="green"
          iconLeft={<RxLockOpen2 />}
          onChange={() => setform(onDecrypt(form))}
          disabled={!form.inputText}
        />
      </InputPassword>

      <ResultText>
        <TextArea
          label={home.resultInput}
          value={form.outputText}
          onChange={outputText => setform({ ...form, outputText })}
        />
        <Button
          label={home.copyButton}
          variant="outline"
          iconLeft={<RxCopy />}
          disabled={!form.outputText}
          onChange={() => copyToClipboard(form.outputText)}
        />
      </ResultText>
    </Container>
  );
};

export default EncryptPanel;
