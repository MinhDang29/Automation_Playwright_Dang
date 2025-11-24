let chieuCao = 170;
let soLeChieuCao = chieuCao % 100;
let canNangLyTuong = (soLeChieuCao * 9) / 10;
let canNangToiDa = soLeChieuCao;
let canNangToiThieu = (soLeChieuCao * 8) / 10;
console.log("Cân nặng lý tưởng là (cm): " + canNangLyTuong + " Cân nặng tối đa là (cm): " + canNangToiDa + " Cân nặng tối thiểu là (cm): " + canNangToiThieu)