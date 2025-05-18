const extractRawJson = (text) => {
    // const match = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
  //   if (match) {
  //     try {
  //       return JSON.parse(match[1]);
  //     } catch (e) {
  //       console.error("Failed to parse JSON inside code block:", e);
  //     }
  //   }
  //   try {
  //     return JSON.parse(text);
  //   } catch (e) {
  //     console.error("Failed to parse raw text as JSON:", e);
  //     return null;
  //   }
  return typeof(text)
};

export default extractRawJson;
