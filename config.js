/*
 * ShohyoDock 公式サイト 設定ファイル
 * 販売URLや連絡先が確定したら、このファイルだけを編集してください(HTMLの編集は不要です)。
 * 外部への通信・計測は一切行いません。
 */
window.SHOHYO_CONFIG = {
  // BOOTH商品ページのURL。商品ページが完成して公開できる状態になったら
  // boothUrl に URL を入れ、boothReady を true にします。
  // boothReady が false(または URL が空)の間は、購入ボタンは「販売準備中」と表示されます。
  boothUrl: "",
  boothReady: false,

  // 体験版のダウンロードURL。未設定の間、ボタンは無効(「体験版は準備中」)です。
  // 実際の配布URLが確定したら trialUrl に入れ、trialIsPlaceholder を false にします。
  trialUrl: "",
  trialIsPlaceholder: true,

  // 製品バージョン表記
  version: "v1.0.2 RC1"
};
