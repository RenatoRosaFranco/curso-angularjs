app = angular.module('listaTelefonica', []);
app.controller('listaTelefonicaCtrl', function($scope){
 $scope.app = 'Lista Telefonica';
 $scope.contatos = [
  {nome: 'Pedro', telefone: '12345678'},
  {nome: 'Ana',   telefone: '23128362'},
  {nome: 'Maria', telefone: '98822615'}
 ];
 $scope.operadoras = [
  {nome: 'Oi', codigo: 14, categoria: 'Celular'},
  {nome: 'Vivo', codigo: 15, categoria: 'Celular'},
  {nome: 'Tim', codigo: 41, categoria: 'Celular'},
  {nome: 'GVT', codigo: 25, categoria: 'Fixo'},
  {nome: 'Embratel', codigo: 21, categoria: 'Fixo'}
 ];
 $scope.adicionarContato = function(contato){
  $scope.contatos.push(contato);
  delete $scope.contato;
  console.log('Adicionado');
 }
});