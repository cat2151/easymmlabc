const easymml = {};
easymml.mmlId = "mml";
easymml.mmlTemplateId = "#mml-template";

easymml.init = function() {
  easymml.mml = document.querySelector("#" + easymml.mmlId);
  easymml.mml.addEventListener("input", easymml.play);

  easyabcjs6.play = easymml.play;
  easyabcjs6.init();

  setupSelect(easymml);
  setupKeyBind(easymml);

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

  function setupKeyBind(easymml) {
    easymml.mml.addEventListener('keypress', function(e) {
      if (e.keyCode === 13 && e.shiftKey) { // SHIFT+ENTER
        e.preventDefault(); // 改行しない
        easymml.playWithTimeShifter();
      }
    });
    easymml.mml.addEventListener('keydown', function(e) {
      if (e.keyCode === 83 && e.ctrlKey) { // CTRL+S
        e.preventDefault(); // ページ保存ダイアログを開かない
        easymml.play();
      }
    });
  }
}

easymml.play = function() {
  const mml = easymml.mml.value;
  easymml.playSub(mml);
}

easymml.playWithTimeShifter = function() {
  const orgMml = easymml.mml.value;
  const mml = easymml.insertTimeShifter(orgMml, easymml.mml.selectionStart);
  easymml.playSub(mml);
}

easymml.onChangeSelect = function() {
  const options = document.querySelectorAll(easymml.mmlTemplateId + " option");
  easymml.mml.value = options[easymml.select.selectedIndex].value;
  easymml.play();
}

easymml.insertTimeShifter = function(mml, pos) {
  pos = getLastNotePos(mml, pos);
  if (!pos) return mml;
  mml = mml.slice(0, pos) + "!!" + mml.slice(pos);
  return mml;

  function getLastNotePos(mml, pos) {
    let noteOrTrackSeparator = findLastMatchPos(mml, pos, /[a-g;]/); // ; は複数track用
    if (noteOrTrackSeparator && mml[noteOrTrackSeparator] == ";") return noteOrTrackSeparator + 1; // 前のtrackのnoteではなく、今のtrack先頭を示す用
    return findLastMatchPos(mml, pos, /[a-g]/);

    function findLastMatchPos(mml, pos, regex) {
      for (let i = pos; i >= 0; i--) {
        if (mml[i] && regex.test(mml[i])) { // mml[i] がfalsyかを見るのは文字列末尾用
          return i;
        }
      }
      return 0;
    }
  }
}

easymml.playSub = function(mml) {
  let abc = "";

  try {
    abc = window.mml2abc.parse(mml);
  } catch (error) {
    console.error(error);
  }

  easyabcjs6.abcNotation.value = abc;
  easyabcjs6.playSub(abc, ABCJS, easyabcjs6.musicScoreId);
}

easymml.init();
