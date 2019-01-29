import Api from "./Api";

export default {
  async signup(formData) {
    try {
      await Api().post("users", formData);
    } catch (error) {
      return error;
    }
  }
};
