const easymml = {};
easymml.mmlId = "mml";
easymml.mmlTemplateId = "#mml-template";

easymml.init = function() {
  easymml.mml = document.querySelector("#" + easymml.mmlId);
  easymml.mml.addEventListener("input", easymml.play);

  easyabcjs6.play = easymml.play;
  easyabcjs6.init();

  setupSelect(easymml);

  easyabcjs6.play = easymml.play;
  easyabcjs6.init();

  function setupSelect(easymml) {
    easymml.select = document.querySelector(easymml.mmlTemplateId);
    easymml.select.addEventListener('change', easymml.onChangeSelect);
    for (t of mmlTemplates) {
      addOptionToSelect(t[1], t[0]);
    }

    function addOptionToSelect(value, text) {
      const opt = document.createElement("option");
      opt.value = removeIndent(value);
      opt.text = text;
      easymml.select.add(opt);

      function removeIndent(rawString) {
        const lines = rawString.split('\n');
        const trimmedLines = lines.map(line => line.trim());
        return trimmedLines.join('\n');
      }
    }
  }
}

easymml.play = function() {
  const mml = easymml.mml.value;
  let abc = "";

  try {
    abc = window.mml2abc.parse(mml);
  } catch (error) {
    console.error(error);
  }

  easyabcjs6.abcNotation.value = abc;
  easyabcjs6.playSub(abc, ABCJS, easyabcjs6.musicScoreId);
}

easymml.onChangeSelect = function() {
  const options = document.querySelectorAll(easymml.mmlTemplateId + " option");
  easymml.mml.value = options[easymml.select.selectedIndex].value;
  easymml.play();
}

easymml.init();
