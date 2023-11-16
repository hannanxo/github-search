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
    padding: 24px;

    @media screen and (max-width: 768px) {
      justify-content: flex-start;
      padding: 32px;
      min-height: 100vh;
      // width: 470px;
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
    :hover {
      background-color: ${token.colorPrimary};
    }
  `,

  titleFirst: css`
    line-height: 80%;
    font-weight: 700;
    font-size: 18px;
  `,
  titleSecond: css`
    font-weight: 100;
    font-size: 14px;
    color: gray;
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
    margin-bottom: 10px;
    border-bottom: #80808070 solid 1px;
    padding: 12px;
  `,

  usercardContent: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
  `,

  repocardHead: css`
    display: flex;
    align-items: center;
    margin-bottom: 0px;
    border-bottom: #80808070 solid 1px;
    padding: 14px;
  `,

  repocardContent: css`
    line-height: 2;
    padding: 0px !important;
    display: inline;
    margin-bottom: 0px;
  `,
  linkButton: css`
    display: inline-block;
    padding: 8px 16px;
    background-color: ${token.colorPrimary};
    margin-top: 4px;
    color: #fff;
    border-radius: 4px;
    text-decoration: none;
  `,

  linkText: css`
    color: #fff;
  `,
}));

export default useStyles;
