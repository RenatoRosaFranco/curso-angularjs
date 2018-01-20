app = angular.module('listaTelefonica', []);
app.controller('listaTelefonicaCtrl', function($scope){
 $scope.app = 'Lista Telefonica';
 $scope.contatos = [
  {nome: 'Pedro', telefone: '12345678'},
  {nome: 'Ana',   telefone: '23128362'},
  {nome: 'Maria', telefone: '98822615'}
 ];
 $scope.adicionarContato = function(contato){
  $scope.contatos.push(contato);
  delete $scope.contato;
  console.log('Adicionado');
 }
});