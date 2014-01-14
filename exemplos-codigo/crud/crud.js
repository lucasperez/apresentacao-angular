var crudModule = angular.module('CrudApp', []);

function CrudController($scope){
	$scope.colaboradores = [new Colaborador({nome:'y', data:'25/12/2013'}), new Colaborador({nome:'x', data:'26/12/2013'})];
	$scope.colaborador = new Colaborador({});

	$scope.adicionaColaboradores = function(colaborador){
		if(typeof(colaborador.index) != "undefined"){
			$scope.colaboradores[colaborador.index] = colaborador;
		}else{
			$scope.colaboradores.push(colaborador);
		}

		$scope.colaborador = new Colaborador({});	
	}

	$scope.excluir = function(index){
		$scope.colaboradores.splice(index, 1);
	}

	$scope.editar = function(index){
		var colaborador = new Colaborador($scope.colaboradores[index]);
		colaborador.index = index;
		$scope.colaborador = colaborador;
	}
}

function Colaborador(args){
	this.nome = args.nome || "";
	this.data = args.data || "";	
}