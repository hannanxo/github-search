import { createStyles } from "antd-style";

const useStyles = createStyles(({ css, token }) => ({
  mainWrapper: css`
    margin: 0px;
  `,

  layoutWrapper: css`
    justify-content: center;
    align-items: center;
    height: 100vh;
  `,
  enabledSearch: css`
    justify-content: flex-start;
    align-items: flex-start;
    padding: ${token.paddingXL}px;
    min-height: 100vh;

    @media screen and (max-width: 768px) {
      justify-content: flex-start;
      padding: 32px;
      min-height: 100vh;
    }
  `,
  headerSpace: css`
    margin-bottom: 20px;
  `,

  headerOverride: css`
    padding: 0 !important;
    margin-bottom: 0;
    background: none;
    margin-right: 24px;
    margin-bottom: -6px;
  `,

  switch: css`
    background-color: ${token.colorPrimary};
  `,

  titleFirst: css`
    line-height: 80%;
    font-weight: 700;
    font-size: 18px;
  `,
  titleSecond: css`
    font-weight: 100;
    color: ${token.colorPrimaryText};
    margin: 4px 0 0 0;
  `,

  dropDown: css`
    padding-left: 0 !important;
    padding-right: 0 !important;
  `,

  userCardHead: css`
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: #80808070 solid 1px;
    padding: ${token.paddingSM}px;
  `,

  userType: css`
    marginright: 8px;
  `,

  repocardHead: css`
    display: flex;
    align-items: center;
    margin-bottom: 0px;
    border-bottom: #80808070 solid 1px;
    padding: ${token.paddingSM}px;
  `,

  buttonMobile: css`
    @media screen and (max-width: 865px) {
      display: flex;
      justify-content: center;
      margin-top: 14px;
    }
  `,
  repocardContent: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${token.paddingSM}px;

    @media screen and (max-width: 865px) {
      width: 100%;
      display: block;
    }
  `,

  linkButton: css`
    display: inline-block;
    padding: 8px 16px;
    background-color: ${token.colorPrimary};
    margin-top: 4px;
    border-radius: 4px;
    text-decoration: none;
  `,

  linkText: css`
    color: ${token.colorWhite};
  `,

  noData: css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,

  errorMsg: css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,

  icon: css`
    color: ${token.colorPrimary};
    font-size: ${token.fontSizeXL}px !important;
  `,
}));

export default useStyles;
