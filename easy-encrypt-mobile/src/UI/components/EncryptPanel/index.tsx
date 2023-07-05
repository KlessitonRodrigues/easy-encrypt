import { useState } from 'react';
import Button from 'src/UI/base/Button';
import CheckOption from 'src/UI/base/CheckOption';
import Icons from 'src/UI/base/Icons';
import Input from 'src/UI/base/Input';

import { copyToClipboard } from './services/copyText';
import { initialData, onDecrypt, onEncrypt } from './services/encrypt';
import { Container, OptionContainer, OptionTitle, Row } from './styled';

const EncryptPanel = (props: EncryptPanelProps) => {
  const { lang } = props;
  const [form, setForm] = useState(initialData);
  const text = lang.text.page.home;

  return (
    <Container>
      <Input
        label={text.textInput}
        value={form.inputText}
        placeHolder={text.textInputPlaceholder}
        onChange={inputText => setForm({ ...form, inputText })}
      />
      <Input
        label={text.passwordInput}
        value={form.password}
        placeHolder={text.passwordInputPlaceholder}
        onChange={password => setForm({ ...form, password })}
      />

      <OptionContainer>
        <OptionTitle>{text.encryptType}</OptionTitle>
        <CheckOption
          checked={!form.usePrivateKey}
          onChange={() => setForm({ ...form, usePrivateKey: false })}
          title={text.encryptTypeCheckbox1}
          description={text.encryptTypeCheckbox1Items}
        />
        <CheckOption
          checked={form.usePrivateKey}
          onChange={() => setForm({ ...form, usePrivateKey: true })}
          title={text.encryptTypeCheckbox2}
          description={text.encryptTypeCheckbox2Items}
        />
      </OptionContainer>

      <Row>
        <Button
          iconLeft={<Icons type="lock" />}
          label={text.encryptButton}
          disabled={!form.inputText}
          onChange={() => setForm(onEncrypt(form))}
        />
        <Button
          iconLeft={<Icons type="lock-open" />}
          label={text.decryptButton}
          color="green"
          disabled={!form.inputText}
          onChange={() => setForm(onDecrypt(form))}
        />
      </Row>

      <Input
        type="textArea"
        label={text.resultInput}
        value={form.outputText}
        readonly
        placeHolder={text.resultInputPlaceholder}
      />
      <Button
        iconLeft={<Icons type="copy" color="gray" />}
        label={text.copyButton}
        color="transparent"
        disabled={!form.outputText}
        onChange={() => copyToClipboard(form.outputText)}
      />
    </Container>
  );
};

export default EncryptPanel;
