export default function loadJs(ArrayExternalScript) {
   ArrayExternalScript.forEach(item => {
      const script = document.createElement("script");
      script.src = item;
      script.async = true;
      document.body.appendChild(script);
   });
}
