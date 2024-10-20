const mmlTemplates = [
  ["テンプレートを選んでください",
  ``],

  ["ドミソシの和音",
  `@49 v11 'c1egb'`],

  ["ドレミ",
  `cde`],

  ["音量(velocity)",
  `v16e v10e v5e v0e v5e v10e v16e`],

  ["音長(note length)",
  `l4f l8f l16f l32f l32f l16f l8f l4f l2f l1f l8cdef l16 cdef`],

  ["音色(MIDI Program Change)",
  `t150 v11 @0'>d1gb<f+' @2'>d1gb<f+' @4'>d1gb<f+' @5'>d1gb<f+'
  @18'>d1gb<f+' @52'>d1gb<f+'`],

  ["ABC小節線",
  `e1 /*|*/ c1`],

  ["ABCタイと、小節線をまたぐタイ",
  `l8 @18 e2. /*-*/ e g /*-|*/ g1; @18 o4 c1 /*|*/ c1`],

  ["synth bass and synth strings",
  `t150 @51 v11 o 'c1egb' 'd1f+a<c+';
  @38 v12 l8 >>[c<c>cc<c>c<c>c]2`],

  ["タイムシフト機能 !! を書いた場所から演奏します",
  `@0'>d1gb<f+' @2'>d1gb<f+' @4'>d1gb<f+' @5'>d1gb<f+' @18'>d1gb<f+'
  !! @52'>d1gb<f+'`],

  ["drum",
  `@128 >>>   d+eff+gg+aa+b`],
  ["drum",
  `@128 >> cc+dd+eff+gg+aa+b`],
  ["drum",
  `@128 >  cc+dd+eff+gg+aa+b`],
  ["drum",
  `@128    cc+dd+eff+gg+aa+b`],
  ["drum",
  `@128 <  cc+dd+eff+gg+aa+b`],
  ["drum",
  `@128 << cc+dd+`],

  ["drum 8beat",
  `@128 t100 l8 >> ['cf+' f+ 'df+' f+]`],

  ["drum 8beat",
  `@128 t100 l8 >> ['cg+' g+ 'dg+' g+]`],

  ["drum 8beat",
  `@128 t100 l8 >> ['ca+' a+ 'da+' a+]`],

  ["drum 8beat",
  `@128 t100 l8 >> ['c<d+''<d+''d<d+''<d+']`],

  ["drum 8beat",
  `@128 t100 l8 >> ['c<e+''<e+''d<e+''<e+']`],

  ["drum 8beat",
  `@128 t100 l8 >> ['c<f''<f''d<f''<f']`],

  ["drum 8beat",
  `@128 t100 l8 >> ['c<f+''<f+''d<f+''<f+']`],

  ["drum 8beat",
  `@128 t100 l8 >> ['c<b''<b''d<b''<b']`],

  ["PC000 Acoustic Grand Piano", `@000 v11 '>d1gb<f+'`],
  ["PC001 Bright Acoustic Piano", `@001 v11 '>d1gb<f+'`],
  ["PC002 Electric Grand Piano (usually modeled after Yamaha CP-70)", `@002 v11 '>d1gb<f+'`],
  ["PC003 Honky-tonk Piano", `@003 v11 '>d1gb<f+'`],
  ["PC004 Electric Piano 1 (usually a Rhodes or Wurlitzer)", `@004 v11 '>d1gb<f+'`],
  ["PC005 Electric Piano 2 (usually an FM piano)", `@005 v11 '>d1gb<f+'`],
  ["PC006 Harpsichord", `@006 v11 '>d1gb<f+'`],
  ["PC007 Clavinet", `@007 v11 '>d1gb<f+'`],
  ["PC008 Celesta", `@008 v11 '>d1gb<f+'`],
  ["PC009 Glockenspiel", `@009l2gb<dg`],
  ["PC010 Music Box", `@010 v11 '>d1gb<f+'`],
  ["PC011 Vibraphone", `@011 v11 '>d1gb<f+'`],
  ["PC012 Marimba", `@012 v11 '>d1gb<f+'`],
  ["PC013 Xylophone", `@013 v11 '>d1gb<f+'`],
  ["PC014 Tubular Bells", `@014 >g1 b1`],
  ["PC015 Dulcimer", `@015 v11 '>d1gb<f+'`],
  ["PC016 Drawbar Organ", `@016 v11 '>d1gb<f+'`],
  ["PC017 Percussive Organ", `@017 v11 '>d1gb<f+'`],
  ["PC018 Rock Organ", `@018 v11 '>d1gb<f+'`],
  ["PC019 Church Organ", `@019 v11 '>d1gb<f+'`],
  ["PC020 Reed Organ", `@020 v11 '>d1gb<f+'`],
  ["PC021 Accordion", `@021 v11 '>d1gb<f+'`],
  ["PC022 Harmonica", `@022 v11 '>d1gb<f+'`],
  ["PC023 Bandoneon", `@023 v11 '>d1gb<f+'`],
  ["PC024 Acoustic Guitar (nylon)", `@024 v11 '>d1gb<f+'`],
  ["PC025 Acoustic Guitar (steel)", `@025 v11 '>d1gb<f+'`],
  ["PC026 Electric Guitar (jazz)", `@026 v11 '>d1gb<f+'`],
  ["PC027 Electric Guitar (clean)", `@027 v11 '>d1gb<f+'`],
  ["PC028 Electric Guitar (muted)", `@028 v11 '>d1gb<f+'`],
  ["PC029 Electric Guitar (overdrive)", `@029 v11 '>d1g'`],
  ["PC030 Electric Guitar (distortion)", `@030 v11 '>>c+1g+'`],
  ["PC031 Electric Guitar (harmonics)", `@031 c+1`],
  ["PC032 Acoustic Bass", `@032>d1`],
  ["PC033 Electric Bass (finger)", `@033>d1`],
  ["PC034 Electric Bass (picked)", `@034>d1`],
  ["PC035 Electric Bass (fretless)", `@035>d1`],
  ["PC036 Slap Bass 1", `@036>d1`],
  ["PC037 Slap Bass 2", `@037>d1`],
  ["PC038 Synth Bass 1", `@038>d1`],
  ["PC039 Synth Bass 2", `@039>d1`],
  ["PC040 Violin", `@040 v13 '<d1g'`],
  ["PC041 Viola", `@041 v13 'd1g'`],
  ["PC042 Cello", `@042>d1`],
  ["PC043 Contrabass", `@043>>d1`],
  ["PC044 Tremolo Strings", `@044 v11 '>d1gb<f+'`],
  ["PC045 Pizzicato Strings", `@045l4cegb`],
  ["PC046 Orchestral Harp", `@046l4cegb`],
  ["PC047 Timpani", `@047 t l4 >>[gd]4`],
  ["PC048 String Ensemble 1", `@048 v11 '>d1gb<f+'`],
  ["PC049 String Ensemble 2", `@049 v11 '>d1gb<f+'`],
  ["PC050 Synth Strings 1", `@050 v11 '>d1gb<f+'`],
  ["PC051 Synth Strings 2", `@051 v11 '>d1gb<f+'`],
  ["PC052 Choir Aahs", `@052 v11 '>d1gb<f+'`],
  ["PC053 Voice Oohs", `@053 v11 '>d1gb<f+'`],
  ["PC054 Synth Voice", `@054 v11 '>d1gb<f+'`],
  ["PC055 Orchestra Hit", `@055 t150 <c2>b-2a2g2`],
  ["PC056 Trumpet", `@056 v11 'd1gb<f+'`],
  ["PC057 Trombone", `@057>d1`],
  ["PC058 Tuba", `@058 >>d1`],
  ["PC059 Muted Trumpet", `@059 v11 'd1gb<f+'`],
  ["PC060 French Horn", `@060 v11 '>d1gb<f+'`],
  ["PC061 Brass Section", `@061 v11 '>d1gb<f+'`],
  ["PC062 Synth Brass 1", `@062 v11 '>d1gb<f+'`],
  ["PC063 Synth Brass 2", `@063 v11 '>d1gb<f+'`],
  ["PC064 Soprano Sax", `@064 v11 'd1gb<f+'`],
  ["PC065 Alto Sax", `@065 v11 '>d1gb<f+'`],
  ["PC066 Tenor Sax", `@066>d1`],
  ["PC067 Baritone Sax", `@067>d1`],
  ["PC068 Oboe", `@068 v11 'd1gb<f+'`],
  ["PC069 English Horn", `@069 v11 '>d1gb<f+'`],
  ["PC070 Bassoon", `@070 v11 '>d1gb<f+'`],
  ["PC071 Clarinet", `@071 v11 'd1gb<f+'`],
  ["PC072 Piccolo", `@072 v11 '<d1gb<f+'`],
  ["PC073 Flute", `@073 v11 'd1gb<f+'`],
  ["PC074 Recorder", `@074 v11 'd1gb<f+'`],
  ["PC075 Pan Flute", `@075 v11 'd1gb<f+'`],
  ["PC076 Blown bottle", `@076 v11 'd1gb<f+'`],
  ["PC077 Shakuhachi", `@077<d1`],
  ["PC078 Whistle", `@078<d1`],
  ["PC079 Ocarina", `@079<d1`],
  ["PC080 Lead 1 (square)", `@080 v11 '>d1gb<f+'`],
  ["PC081 Lead 2 (sawtooth)", `@081 v11 '>d1gb<f+'`],
  ["PC082 Lead 3 (calliope)", `@082 v11 '>d1gb<f+'`],
  ["PC083 Lead 4 (chiff)", `@083 v11 '>d1gb<f+'`],
  ["PC084 Lead 5 (charang)", `@084 v11 '>d1gb<f+'`],
  ["PC085 Lead 6 (voice)", `@085 v11 '>d1gb<f+'`],
  ["PC086 Lead 7 (fifths)", `@086 v11 l1 d 'dd+' 'de' 'df' 'df+' 'dg' 'dg+' 'da' 'da+' 'db' 'd<c' 'd<c+' 'd<d'`],
  ["PC087 Lead 8 (bass and lead) 404", `@087c1`], // 404
  ["PC088 Pad 1 (new age)", `@088 v11 '>d1gb<f+'`],
  ["PC089 Pad 2 (warm)", `@089 v11 '>d1gb<f+'`],
  ["PC090 Pad 3 (polysynth)", `@090 v11 '>d1gb<f+'`],
  ["PC091 Pad 4 (choir)", `@091 v11 '>d1gb<f+'`],
  ["PC092 Pad 5 (bowed glass)", `@092 v11 '>d1gb<f+'`],
  ["PC093 Pad 6 (metallic)", `@093 v11 '>d1gb<f+'`],
  ["PC094 Pad 7 (halo)", `@094 v11 '>d1gb<f+'`],
  ["PC095 Pad 8 (sweep)", `@095 v11 '>d1gb<f+'`],
  ["PC096 FX 1 (rain)", `@096 v11 '>d1gb<f+'`],
  ["PC097 FX 2 (soundtrack)", `@097 l2 v14 'da+' 'da' 'df+' 'df' 'c+e' 'c1d+'`],
  ["PC098 FX 3 (crystal)", `@098dgb<f+`],
  ["PC099 FX 4 (atmosphere)", `@099 v11 '>d1gb<f+'`],
  ["PC100 FX 5 (brightness)", `@100 v11 '>d1gb<f+'`],
  ["PC101 FX 6 (goblins)", `@101 v11 '>d1gb<f+'`],
  ["PC102 FX 7 (echoes)", `@102 v11 '>d1gb<f+'`],
  ["PC103 FX 8 (sci-fi)", `@103 v11 '>d1gb<f+'`],
  ["PC104 Sitar", `@104>a<da2`],
  ["PC105 Banjo", `@105 v11 '>d1gb<f+'`],
  ["PC106 Shamisen", `@106>d1`],
  ["PC107 Koto", `@107 t150 l8bafe>bafe`],
  ["PC108 Kalimba", `@108>dgb<f+`],
  ["PC109 Bag pipe", `@109dgb<f+`],
  ["PC110 Fiddle", `@110dgb<f+`],
  ["PC111 Shanai", `@111dgb<f+`],
  ["PC112 Tinkle Bell", `@112dgb<f+`],
  ["PC113 Agogo", `@113>dgb<f+`],
  ["PC114 Steel Drums", `@114>dgb<f+`],
  ["PC115 Woodblock", `@115d1`],
  ["PC116 Taiko", `@116d1`],
  ["PC117 Melodic Tom", `@117 t150 g16g16c8>g8c8>g8c`],
  ["PC118 Synth Drum", `@118 t150 g16g16c8>g8c8>g8c`],
  ["PC119 Reverse Cymbal", `@119c1`],
  ["PC120 Guitar Fret Noise", `@120c1`],
  ["PC121 Breath Noise", `@121c1`],
  ["PC122 Seashore", `@122c1`],
  ["PC123 Bird Tweet", `@123c1`],
  ["PC124 Telephone Ring", `@124c1`],
  ["PC125 Helicopter", `@125c1`],
  ["PC126 Applause", `@126c1`],
  ["PC127 Gunshot", `@127c1`],

];
