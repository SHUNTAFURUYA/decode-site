// フォームの送り先と、資料の渡し方。ここだけ直せば、すべてのフォームに反映されます。
// 公開のときに大塚が決めて入れる（それまでは空のまま）。
export const formConfig = {
  // フォームの送信先 URL（POST で JSON を受け取る所）。
  // 空のあいだは、サーバーには送りません。
  //   ・お問い合わせ → info@ 宛のメール作成画面を開く
  //   ・資料の申し込み → 完了画面だけ出す（画面に「準備中」の注記が付く）
  endpoint: "",

  // 資料の渡し方
  //   "email"    … 送信後「メールでお送りします」と表示（担当者が後でメールで送る）
  //   "download" … 送信後、完了画面から資料をダウンロードできる（downloadUrl が必要）
  documentDelivery: "email" as "email" | "download",

  // documentDelivery が "download" のときの資料の置き場所（例: "/docs/owned-media-360.pdf"）
  downloadUrl: "",
};
