import { Button } from "@material-ui/core";
import React, { useCallback } from "react";
import styled from "styled-components";
import plus from "../../src/assets/plus.svg";
import { useInstallPrompt } from "../hooks/useInstallPrompt";

type Props = {
  onDismiss: () => void;
};

export const PWAPrompt = ({ onDismiss }: Props) => {
  const [prompt, promptToInstall] = useInstallPrompt();

  const onInstall = useCallback(() => {
    if (!prompt) return;
    promptToInstall();
  }, [prompt, promptToInstall]);

  return (
    <Wrapper>
      <AddIcon src={plus} />
      <div>新增至主畫面先啦</div>
      <div>唔係點似個App</div>
      <InstructionWrapper>
        <div>IOS</div>
        <div>{"用Safari開=>分享=>新增至主畫面"}</div>
        <div>Android</div>
        <div>{"用Chrome開=>右上選項=>新增至主畫面/安裝應用程式"}</div>
        {prompt && (
          <InstallButtonWrapper>
            <Button variant="contained" onClick={onInstall}>
              安裝
            </Button>
          </InstallButtonWrapper>
        )}
      </InstructionWrapper>
      <div>
        <Button variant="contained" onClick={onDismiss}>
          我知我做緊乜，俾我入去
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  vertical-align: middle;
  flex-direction: column;
  text-align: center;
  color: #fff;
`;

const AddIcon = styled.img`
  width: 100px;
  margin: 0 auto 32px auto;
`;

const InstallButtonWrapper = styled.div`
  margin-top: 12px;
`;

const InstructionWrapper = styled.div`
  font-size: 12px;
  margin: 24px 0;
`;
