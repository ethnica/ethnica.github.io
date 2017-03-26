var AccessoriesController = angular.module("Ethnica")
.controller("AccessoriesController", function ($scope, $rootScope) {

    $scope.MagicSpinLoader = true;

    //Showing the loader untill the data initializes
    window.setTimeout(function () {
        $scope.$apply(function () {
            $scope.MagicSpinLoader = false;
        });
    }, 3000)
    //Initializing the filter bar show and hide
    $scope.showFilter = true;
    $scope.showOrHideFilter = function () {
        if ($scope.showFilter) {
            $scope.showFilter = false;
        }
        else {
            $scope.showFilter = true;
        }

    }

    //Initializing the range slider
    $('.range-slider').jRange({
        from: 0,
        to: 10000,
        width:200,
        step: 1,
        scale: [0, 5000,10000],
        format: '%sRs',
        showLabels: true,
        isRange: true
    });

    //Initializing the products data in json format.New data can be added here
    $scope.MainEthnicaProducts = [{ "ID": 1, "Product": "Stud", "Category": "Classical", "Price": 200, "NewPrice": 200, "OldPrice": 220, "Description": "Crystal Chocker", "Discount": "10", "Url": "stud.png" },
{ "ID": 2, "Product": "Stud", "Category": "Classical", "Price": 200, "NewPrice": 200, "OldPrice": 220, "Description": "Crystal Chocker", "Discount": "10", "Url": "stud.png" },
{ "ID": 3, "Product": "Stud", "Category": "Classical", "Price": 200, "NewPrice": 200, "OldPrice": 220, "Description": "Crystal Chocker", "Discount": "10", "Url": "stud.png" },
{ "ID": 4, "Product": "Stud", "Category": "Classical", "Price": 200, "NewPrice": 200, "OldPrice": 220, "Description": "Crystal Chocker", "Discount": "10", "Url": "stud.png" },
{ "ID": 5, "Product": "Stud", "Category": "Classical", "Price": 200, "NewPrice": 200, "OldPrice": 220, "Description": "Crystal Chocker", "Discount": "10", "Url": "stud.png" },
{ "ID": 6, "Product": "Stud", "Category": "Classical", "Price": 200, "NewPrice": 200, "OldPrice": 220, "Description": "Crystal Chocker", "Discount": "10", "Url": "stud.png" },
{ "ID": 7, "Product": "Stud", "Category": "Classical", "Price": 200, "NewPrice": 200, "OldPrice": 220, "Description": "Crystal Chocker", "Discount": "10", "Url": "stud.png" },
{ "ID": 8, "Product": "Stud", "Category": "Classical", "Price": 200, "NewPrice": 200, "OldPrice": 220, "Description": "Crystal Chocker", "Discount": "10", "Url": "stud.png" },
{ "ID": 9, "Product": "Stud", "Category": "Classical", "Price": 200, "NewPrice": 200, "OldPrice": 220, "Description": "Crystal Chocker", "Discount": "10", "Url": "stud.png" },
{ "ID": 10, "Product": "Stud", "Category": "Classical", "Price": 200, "NewPrice": 200, "OldPrice": 220, "Description": "Crystal Chocker", "Discount": "10", "Url": "stud.png" },
{ "ID": 11, "Product": "Stud", "Category": "Classical", "Price": 200, "NewPrice": 200, "OldPrice": 220, "Description": "Crystal Chocker", "Discount": "10", "Url": "stud.png" },
{ "ID": 12, "Product": "Stud", "Category": "Classical", "Price": 200, "NewPrice": 200, "OldPrice": 220, "Description": "Crystal Chocker", "Discount": "10", "Url": "stud.png" },
{ "ID": 13, "Product": "Stud", "Category": "Classical", "Price": 200, "NewPrice": 200, "OldPrice": 220, "Description": "Crystal Chocker", "Discount": "10", "Url": "stud.png" },
{ "ID": 14, "Product": "Stud", "Category": "Classical", "Price": 200, "NewPrice": 200, "OldPrice": 220, "Description": "Crystal Chocker", "Discount": "10", "Url": "stud.png" },
{ "ID": 15, "Product": "Stud", "Category": "Classical", "Price": 200, "NewPrice": 200, "OldPrice": 220, "Description": "Crystal Chocker", "Discount": "10", "Url": "stud.png" },
{ "ID": 16, "Product": "Stud", "Category": "Classical", "Price": 200, "NewPrice": 200, "OldPrice": 220, "Description": "Crystal Chocker", "Discount": "10", "Url": "stud.png" },
{ "ID": 17, "Product": "Stud", "Category": "Classical", "Price": 200, "NewPrice": 200, "OldPrice": 220, "Description": "Crystal Chocker", "Discount": "10", "Url": "stud.png" },
{ "ID": 18, "Product": "Stud", "Category": "Classical", "Price": 200, "NewPrice": 200, "OldPrice": 220, "Description": "Crystal Chocker", "Discount": "10", "Url": "stud.png" },
{ "ID": 19, "Product": "Stud", "Category": "Classical", "Price": 200, "NewPrice": 200, "OldPrice": 220, "Description": "Crystal Chocker", "Discount": "10", "Url": "stud.png" },
{ "ID": 20, "Product": "Stud", "Category": "Classical", "Price": 200, "NewPrice": 200, "OldPrice": 220, "Description": "Crystal Chocker", "Discount": "10", "Url": "stud.png" },
{ "ID": 21, "Product": "Stud", "Category": "Classical", "Price": 200, "NewPrice": 200, "OldPrice": 220, "Description": "Crystal Chocker", "Discount": "10", "Url": "stud.png" },
{ "ID": 22, "Product": "Stud", "Category": "Classical", "Price": 200, "NewPrice": 200, "OldPrice": 220, "Description": "Crystal Chocker", "Discount": "10", "Url": "stud.png" },
{ "ID": 23, "Product": "Stud", "Category": "Classical", "Price": 200, "NewPrice": 200, "OldPrice": 220, "Description": "Crystal Chocker", "Discount": "10", "Url": "stud.png" },
{ "ID": 24, "Product": "Stud", "Category": "Classical", "Price": 200, "NewPrice": 200, "OldPrice": 220, "Description": "Crystal Chocker", "Discount": "10", "Url": "stud.png" },
{ "ID": 25, "Product": "Bangel", "Category": "Bridal", "Price": 500, "NewPrice": 500, "OldPrice": 600, "Description": "Crystal Chocker", "Discount": "20", "Url": "bangel.png" },
{ "ID": 26, "Product": "Bangel", "Category": "Bridal", "Price": 500, "NewPrice": 500, "OldPrice": 600, "Description": "Crystal Chocker", "Discount": "20", "Url": "bangel.png" },
{ "ID": 27, "Product": "Bangel", "Category": "Bridal", "Price": 500, "NewPrice": 500, "OldPrice": 600, "Description": "Crystal Chocker", "Discount": "20", "Url": "bangel.png" },
{ "ID": 28, "Product": "Bangel", "Category": "Bridal", "Price": 500, "NewPrice": 500, "OldPrice": 600, "Description": "Crystal Chocker", "Discount": "20", "Url": "bangel.png" },
{ "ID": 29, "Product": "Bangel", "Category": "Bridal", "Price": 500, "NewPrice": 500, "OldPrice": 600, "Description": "Crystal Chocker", "Discount": "20", "Url": "bangel.png" },
{ "ID": 30, "Product": "Bangel", "Category": "Bridal", "Price": 500, "NewPrice": 500, "OldPrice": 600, "Description": "Crystal Chocker", "Discount": "20", "Url": "bangel.png" },
{ "ID": 31, "Product": "Bangel", "Category": "Bridal", "Price": 500, "NewPrice": 500, "OldPrice": 600, "Description": "Crystal Chocker", "Discount": "20", "Url": "bangel.png" },
{ "ID": 32, "Product": "Bangel", "Category": "Bridal", "Price": 500, "NewPrice": 500, "OldPrice": 600, "Description": "Crystal Chocker", "Discount": "20", "Url": "bangel.png" },
{ "ID": 33, "Product": "Bangel", "Category": "Bridal", "Price": 500, "NewPrice": 500, "OldPrice": 600, "Description": "Crystal Chocker", "Discount": "20", "Url": "bangel.png" },
{ "ID": 34, "Product": "Bangel", "Category": "Bridal", "Price": 500, "NewPrice": 500, "OldPrice": 600, "Description": "Crystal Chocker", "Discount": "20", "Url": "bangel.png" },
{ "ID": 35, "Product": "Bangel", "Category": "Bridal", "Price": 500, "NewPrice": 500, "OldPrice": 600, "Description": "Crystal Chocker", "Discount": "20", "Url": "bangel.png" },
{ "ID": 36, "Product": "Bangel", "Category": "Bridal", "Price": 500, "NewPrice": 500, "OldPrice": 600, "Description": "Crystal Chocker", "Discount": "20", "Url": "bangel.png" },
{ "ID": 37, "Product": "Bangel", "Category": "Bridal", "Price": 500, "NewPrice": 500, "OldPrice": 600, "Description": "Crystal Chocker", "Discount": "20", "Url": "bangel.png" },
{ "ID": 38, "Product": "Bangel", "Category": "Bridal", "Price": 500, "NewPrice": 500, "OldPrice": 600, "Description": "Crystal Chocker", "Discount": "20", "Url": "bangel.png" },
{ "ID": 39, "Product": "Bangel", "Category": "Bridal", "Price": 500, "NewPrice": 500, "OldPrice": 600, "Description": "Crystal Chocker", "Discount": "20", "Url": "bangel.png" },
{ "ID": 40, "Product": "Bangel", "Category": "Bridal", "Price": 500, "NewPrice": 500, "OldPrice": 600, "Description": "Crystal Chocker", "Discount": "20", "Url": "bangel.png" },
{ "ID": 41, "Product": "Bangel", "Category": "Bridal", "Price": 500, "NewPrice": 500, "OldPrice": 600, "Description": "Crystal Chocker", "Discount": "20", "Url": "bangel.png" },
{ "ID": 42, "Product": "Bangel", "Category": "Bridal", "Price": 500, "NewPrice": 500, "OldPrice": 600, "Description": "Crystal Chocker", "Discount": "20", "Url": "bangel.png" },
{ "ID": 43, "Product": "Bangel", "Category": "Bridal", "Price": 500, "NewPrice": 500, "OldPrice": 600, "Description": "Crystal Chocker", "Discount": "20", "Url": "bangel.png" },
{ "ID": 44, "Product": "Bangel", "Category": "Bridal", "Price": 500, "NewPrice": 500, "OldPrice": 600, "Description": "Crystal Chocker", "Discount": "20", "Url": "bangel.png" },
{ "ID": 45, "Product": "Bangel", "Category": "Bridal", "Price": 500, "NewPrice": 500, "OldPrice": 600, "Description": "Crystal Chocker", "Discount": "20", "Url": "bangel.png" },
{ "ID": 46, "Product": "Bangel", "Category": "Bridal", "Price": 500, "NewPrice": 500, "OldPrice": 600, "Description": "Crystal Chocker", "Discount": "20", "Url": "bangel.png" },
{ "ID": 47, "Product": "Bangel", "Category": "Bridal", "Price": 500, "NewPrice": 500, "OldPrice": 600, "Description": "Crystal Chocker", "Discount": "20", "Url": "bangel.png" },
{ "ID": 48, "Product": "Bangel", "Category": "Bridal", "Price": 500, "NewPrice": 500, "OldPrice": 600, "Description": "Crystal Chocker", "Discount": "20", "Url": "bangel.png" },
{ "ID": 49, "Product": "Bangel", "Category": "Bridal", "Price": 500, "NewPrice": 500, "OldPrice": 600, "Description": "Crystal Chocker", "Discount": "20", "Url": "bangel.png" }]

    //Initializing the data
    $scope.EthnicaProducts = $scope.MainEthnicaProducts

    //Pagination code
    $scope.curPage = 0;
    $scope.pageSize = 12;

    $scope.numberOfPages = function() {
        return Math.ceil($scope.EthnicaProducts.length / $scope.pageSize);
    };

    $scope.searchVal = "";
    //Search functionality
    $scope.searchUsers = function () {
        //Showing the loader untill the data initializes
        $scope.MagicSpinLoader = true;
        window.setTimeout(function () {
            $scope.$apply(function () {
                $scope.MagicSpinLoader = false;
            });
        }, 2000)
        $scope.EthnicaProducts = $scope.MainEthnicaProducts
        var val = $("#searchInput").val();
        if (val == $scope.searchVal) {
            return; 
        } else {
            searchVal = val;
            var searchResults = {};
            searchResults = [];
            for (var i = 0; i < $scope.EthnicaProducts.length; i++) {
                var product = $scope.EthnicaProducts[i];
                if (val.indexOf(product.Product.toLowerCase()) != -1) {
                    searchResults.push(product);
                }
                if (val.indexOf(product.Category.toLowerCase()) != -1) {
                    searchResults.push(product);
                }
                if (val.indexOf(product.Description.toLowerCase())!= -1) {
                    searchResults.push(product);
                }
            }
           
            $scope.EthnicaProducts = searchResults
          
            $scope.curPage = 0;
        
           // $scope.$apply($scope.EthnicaProducts);
        }
    }

    //Binding the discount radio buttons
    $("input[type='radio'][name='discountRadio']").click(function () {
        $scope.filterDiscountRadio(this);
    });

    $scope.filterDiscountRadio = function (data) {
        //Showing the loader untill the data initializes
      
        if (data.value != undefined) {
            $scope.$apply($scope.MagicSpinLoader = true);
            window.setTimeout(function () {
                $scope.$apply(function () {
                    $scope.MagicSpinLoader = false;
                });
            }, 2000)
            var percentVal = data.value.split("-");
            var percent1 = percentVal[0];
            var percent2 = percentVal[1];
            $scope.EthnicaProducts = $scope.MainEthnicaProducts
            var finalProducts = [];
            for (var i = 0; i < $scope.EthnicaProducts.length; i++) {
                var product = $scope.EthnicaProducts[i];
                if (parseInt(product.Discount) >= parseInt(percent1) && parseInt(product.Discount) <= parseInt(percent2)) {
                    finalProducts.push(product);
                }
            }
            $scope.EthnicaProducts = finalProducts

            $scope.curPage = 0;
        }
          
    }

    //Binding the Category radio buttons
    $("input[type='radio'][name='categoryRadio']").click(function () {
        $scope.filterCategoryRadio(this);
    });

    $scope.filterCategoryRadio = function (data) {
        //Showing the loader untill the data initializes

        if (data.value != undefined) {
            $scope.$apply($scope.MagicSpinLoader = true);
            window.setTimeout(function () {
                $scope.$apply(function () {
                    $scope.MagicSpinLoader = false;
                });
            }, 2000)
            var category = data.value.toLowerCase();
          
            $scope.EthnicaProducts = $scope.MainEthnicaProducts
            var finalProducts = [];
            for (var i = 0; i < $scope.EthnicaProducts.length; i++) {
                var product = $scope.EthnicaProducts[i];
                if (category.indexOf(product.Category.toLowerCase()) != -1) {
                    finalProducts.push(product);
                }
                else if(category.toLowerCase()=="all") {
                    finalProducts = $scope.MainEthnicaProducts;
                }
            }
            $scope.EthnicaProducts = finalProducts

            $scope.curPage = 0;
        }

    }

    //Binding the product drop down
    $("#productFilter").change(function () {
        $scope.filterProduct(this)
    });

    $scope.filterProduct = function (data) {
        if (data.value != undefined) {
            $scope.$apply($scope.MagicSpinLoader = true);
            window.setTimeout(function () {
                $scope.$apply(function () {
                    $scope.MagicSpinLoader = false;
                });
            }, 2000)
            var productVal = data.value.toLowerCase();

            $scope.EthnicaProducts = $scope.MainEthnicaProducts
            var finalProducts = [];
            for (var i = 0; i < $scope.EthnicaProducts.length; i++) {
                var product = $scope.EthnicaProducts[i];
                if (productVal.indexOf(product.Product.toLowerCase()) != -1) {
                    finalProducts.push(product);
                }
                else if (productVal.toLowerCase() == "") {
                    finalProducts = $scope.MainEthnicaProducts;
                }
            }
            $scope.EthnicaProducts = finalProducts

            $scope.curPage = 0;
        }
       

    }

    $("#priceFilterButton").on('click', function () {
        $scope.filterPrice();
    })
  
    $scope.filterPrice = function () {
        var priceRange = $("#filterPrice")[0].defaultValue;
        if (priceRange != undefined) {
           
            var range1 = priceRange.split(',')[0];
            var range2 = priceRange.split(',')[1];
            $scope.$apply($scope.MagicSpinLoader = true);
            window.setTimeout(function () {
                $scope.$apply(function () {
                    $scope.MagicSpinLoader = false;
                });
            }, 2000)

            $scope.EthnicaProducts = $scope.MainEthnicaProducts
            var finalProducts = [];
            for (var i = 0; i < $scope.EthnicaProducts.length; i++) {
                var product = $scope.EthnicaProducts[i];
                if (parseInt(product.Price) >= parseInt(range1) && parseInt(product.Price) <= parseInt(range2)) {
                    finalProducts.push(product);
                }
            }
            $scope.EthnicaProducts = finalProducts

            $scope.curPage = 0;
        }

    }
})


