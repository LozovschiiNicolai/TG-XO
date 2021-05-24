export const mapGetGameData = res => ({
  field: res.data.field,
  moveRole: res.data.moveRole,
  gameScore: res.gameScore,
  winResult: res.winResult
});
