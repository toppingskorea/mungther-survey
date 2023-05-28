import GA from "react-ga4";

type SendGoogleAnalyticsParams = {
  eventName: string;
};

export const useGoogleAnalytics = () => {
  const sendClickEventToGoogleAnalytics = (
    params: SendGoogleAnalyticsParams
  ) => {
    GA.ga?.("send", "event", "click_event", params.eventName);
  };

  return {
    sendClickEventToGoogleAnalytics,
  };
};
