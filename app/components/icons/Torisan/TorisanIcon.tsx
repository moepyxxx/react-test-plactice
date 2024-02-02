import { getHtmlCodeFromColorKey } from "../../../utils/color";
import { SvgProps } from "../props";

export const TorisanIcon: React.FC<SvgProps> = ({ color, size }) => {
  const htmlColor = getHtmlCodeFromColorKey(color);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 27.8648V17.4911H14.3333C12.9111 17.4911 11.5722 17.2169 10.3167 16.6685C9.06111 16.1202 7.94444 15.3424 6.96667 14.3353C5.98889 13.3281 5.25 12.1643 4.75 10.8438C4.25 9.5233 4 8.14685 4 6.71445V4.02869H6.6C7.97778 4.02869 9.3 4.30286 10.5667 4.8512C11.8333 5.39954 12.9667 6.17729 13.9667 7.18445C14.7 7.94542 15.3056 8.79591 15.7833 9.73593C16.2611 10.6759 16.6 11.6719 16.8 12.7238C16.9778 12.4553 17.1667 12.1979 17.3667 11.9517C17.5667 11.7055 17.7778 11.4593 18 11.2131C19 10.2059 20.1333 9.42818 21.4 8.87984C22.6667 8.3315 24 8.05733 25.4 8.05733H28V10.7431C28 12.1755 27.7333 13.5519 27.2 14.8724C26.6667 16.1929 25.9111 17.3568 24.9333 18.3639C23.9333 19.3711 22.8056 20.1432 21.55 20.6804C20.2944 21.2175 18.9778 21.4861 17.6 21.4861H17V27.8648H15ZM15.0333 15.4432C15.0333 14.0779 14.8111 12.8078 14.3667 11.6327C13.9222 10.4577 13.3111 9.45616 12.5333 8.62805C11.7556 7.82232 10.8 7.19005 9.66667 6.73123C8.53333 6.27241 7.31111 6.04301 6 6.04301C6 7.45303 6.20556 8.74555 6.61667 9.92057C7.02778 11.0956 7.62222 12.0972 8.4 12.9253C9.33333 13.9324 10.3389 14.6039 11.4167 14.9396C12.4944 15.2753 13.7 15.4432 15.0333 15.4432ZM17 19.4718C18.3333 19.4718 19.5667 19.2536 20.7 18.8171C21.8333 18.3807 22.7889 17.7484 23.5667 16.9203C24.3444 16.1146 24.9444 15.1242 25.3667 13.9492C25.7889 12.7742 26 11.4817 26 10.0716C24.6667 10.0716 23.4333 10.3011 22.3 10.7599C21.1667 11.2187 20.2111 11.851 19.4333 12.6567C18.4778 13.6638 17.8333 14.7158 17.5 15.8125C17.1667 16.9091 17 18.1289 17 19.4718Z"
        fill={htmlColor}
      />
    </svg>
  );
};