import { Api } from "shared/Api/Api";
import { create } from "zustand";

const isValidUrl = (url) => {
  return typeof url === "string" && url.trim() !== "" && url.startsWith("http");
};

export const useFooterIconStore = create((set) => ({
  whatsappUrl: "",
  whatsappImg: "",
  whatsappImgHover: "",
  instagramUrl: "",
  instagramImg: "",
  instagramImgHover: "",
  facebookUrl: "",
  facebookImg: "",
  facebookImgHover: "",
  telegramUrl: "",
  telegramImg: "",
  telegramImgHover: "",
  youtubeUrl: "",
  youtubeImg: "",
  youtubeImgHover: "",
  isLoading: false,
  error: null,
  fetchFooterIcons: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await Api.get(`footer`);
      const footerData = response.data;
      set({
        whatsappUrl: isValidUrl(footerData.whatsapp_url)
          ? footerData.whatsapp_url
          : "",
        whatsappImg: isValidUrl(footerData.whatsapp_default_icon)
          ? footerData.whatsapp_default_icon
          : "",
        whatsappImgHover: isValidUrl(footerData.whatsapp_hover_icon)
          ? footerData.whatsapp_hover_icon
          : "",

        instagramUrl: isValidUrl(footerData.instagram_url)
          ? footerData.instagram_url
          : "",
        instagramImg: isValidUrl(footerData.instagram_default_icon)
          ? footerData.instagram_default_icon
          : "",
        instagramImgHover: isValidUrl(footerData.instagram_hover_icon)
          ? footerData.instagram_hover_icon
          : "",

        facebookUrl: isValidUrl(footerData.facebook_url)
          ? footerData.facebook_url
          : "",
        facebookImg: isValidUrl(footerData.facebook_default_icon)
          ? footerData.facebook_default_icon
          : "",
        facebookImgHover: isValidUrl(footerData.facebook_hover_icon)
          ? footerData.facebook_hover_icon
          : "",

        telegramUrl: isValidUrl(footerData.telegram_url)
          ? footerData.telegram_url
          : "",
        telegramImg: isValidUrl(footerData.telegram_default_icon)
          ? footerData.telegram_default_icon
          : "",
        telegramImgHover: isValidUrl(footerData.telegram_hover_icon)
          ? footerData.telegram_hover_icon
          : "",

        youtubeUrl: isValidUrl(footerData.youtube_url)
          ? footerData.youtube_url
          : "",
        youtubeImg: isValidUrl(footerData.youtube_default_icon)
          ? footerData.youtube_default_icon
          : "",
        youtubeImgHover: isValidUrl(footerData.youtube_hover_icon)
          ? footerData.youtube_hover_icon
          : "",

        isLoading: false,
      });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));
