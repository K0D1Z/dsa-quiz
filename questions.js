const questionDatabase = [
        {
            id: 12,
            category: "1. Złożoność obliczeniowa i analiza algorytmów",
            text: "Jakie jest rozwiązanie równania $T(n) = 2T(n/2) + n$ według twierdzenia o rekurencji uniwersalnej (master theorem)?",
            options: [
                { text: "$\\Theta(n \\log n)$", isCorrect: true },
                { text: "$\\Theta(n^2)$", isCorrect: false },
                { text: "$\\Theta(n)$", isCorrect: false },
                { text: "$\\Theta(\\log n)$", isCorrect: false }
            ]
        },
        {
            id: 25,
            category: "1. Złożoność obliczeniowa i analiza algorytmów",
            text: "Co dokładnie bada analiza zamortyzowana?",
            options: [
                { text: "Średni czas wykonania operacji w najgorszym (pesymistycznym) ciągu operacji.", isCorrect: true },
                { text: "Oczekiwany czas wykonania dla losowych danych wejściowych.", isCorrect: false },
                { text: "Średni czas wykonania jednej operacji przy założeniu równomiernego rozkładu danych.", isCorrect: false },
                { text: "Całkowity czas wykonania pojedynczej, najdroższej operacji w programie.", isCorrect: false }
            ]
        },
        {
            id: 30,
            category: "1. Złożoność obliczeniowa i analiza algorytmów",
            text: "Jak poprawnie uporządkować rosnąco złożoności czasowe: $n \\log n, n^2, n^3, 2^n$?",
            options: [
                { text: "$n \\log n \\le n^2 \\le n^3 \\le 2^n$", isCorrect: true },
                { text: "$n \\log n \\le n^3 \\le n^2 \\le 2^n$", isCorrect: false },
                { text: "$2^n \\le n^3 \\le n^2 \\le n \\log n$", isCorrect: false },
                { text: "$n^2 \\le n \\log n \\le n^3 \\le 2^n$", isCorrect: false }
            ]
        },

        {
            id: 9,
            category: "2. Algorytmy sortowania i wyszukiwania elementu",
            text: "Jaka jest złożoność sortowania przez wstawianie (insertion sort) w najgorszym przypadku?",
            options: [
                { text: "$O(n^2)$", isCorrect: true },
                { text: "$O(n \\log n)$", isCorrect: false },
                { text: "$O(n)$", isCorrect: false },
                { text: "$O(1)$", isCorrect: false }
            ]
        },
        {
            id: 11,
            category: "2. Algorytmy sortowania i wyszukiwania elementu",
            text: "Czego używa zrandomizowany quicksort do wyboru elementu osiowego (pivot)?",
            options: [
                { text: "Generatora liczb pseudolosowych do wylosowania indeksu pivota.", isCorrect: true },
                { text: "Zawsze pierwszego elementu tablicy.", isCorrect: false },
                { text: "Algorytmu 'Magicznych Piątek' do znalezienia mediany.", isCorrect: false },
                { text: "Zawsze środkowego elementu tablicy.", isCorrect: false }
            ]
        },
        {
            id: 14,
            category: "2. Algorytmy sortowania i wyszukiwania elementu",
            text: "Czy sortowanie przez scalanie (merge sort) jest algorytmem deterministycznym?",
            options: [
                { text: "Tak, zawsze wykonuje te same kroki dla tych samych danych.", isCorrect: true },
                { text: "Nie, zależy od losowego wyboru pivota.", isCorrect: false }
            ]
        },
        {
            id: 27,
            category: "2. Algorytmy sortowania i wyszukiwania elementu",
            text: "Jaka jest złożoność wyszukiwania binarnego?",
            options: [
                { text: "$O(\\log n)$", isCorrect: true },
                { text: "$O(n)$", isCorrect: false },
                { text: "$O(1)$", isCorrect: false },
                { text: "$O(n \\log n)$", isCorrect: false }
            ]
        },
        {
            id: 31,
            category: "2. Algorytmy sortowania i wyszukiwania elementu",
            text: "Który algorytm sortowania jest przykładem metody \"dziel i zwyciężaj\"?",
            options: [
                { text: "Merge sort (Sortowanie przez scalanie)", isCorrect: true },
                { text: "Quicksort (Sortowanie szybkie)", isCorrect: true },
                { text: "Insertion sort (Sortowanie przez wstawianie)", isCorrect: false },
                { text: "Selection sort (Sortowanie przez wybór)", isCorrect: false }
            ]
        },
        {
            id: 39,
            category: "2. Algorytmy sortowania i wyszukiwania elementu",
            text: "Za pomocą jakiej struktury/algorytmu można znaleźć k-ty najmniejszy element w oczekiwanym czasie liniowym?",
            options: [
                { text: "Randomized Select (Quickselect)", isCorrect: true },
                { text: "Algorytmu Prima", isCorrect: false },
                { text: "Kopca binarnego poprzez k-krotne wywołanie Extract-Min", isCorrect: false },
                { text: "Standardowego Merge Sorta", isCorrect: false }
            ]
        },
        {
            id: 40,
            category: "2. Algorytmy sortowania i wyszukiwania elementu",
            text: "Czy sortowanie przez wstawianie (insertion sort) jest algorytmem stabilnym?",
            options: [
                { text: "Tak", isCorrect: true },
                { text: "Nie", isCorrect: false }
            ]
        },

        {
            id: 5,
            category: "3. Struktury danych: Drzewa (BST, AVL, Czerwono-Czarne)",
            text: "W jakiej kolejności przegląd inorder w drzewie BST odwiedza węzły?",
            options: [
                { text: "W kolejności rosnącej wartości kluczy.", isCorrect: true },
                { text: "Lewe poddrzewo -> Korzeń -> Prawe poddrzewo.", isCorrect: true },
                { text: "Korzeń -> Lewe poddrzewo -> Prawe poddrzewo.", isCorrect: false },
                { text: "Od liści w kierunku korzenia.", isCorrect: false }
            ]
        },
        {
            id: 18,
            category: "3. Struktury danych: Drzewa (BST, AVL, Czerwono-Czarne)",
            text: "Jaka jest w najgorszym przypadku wysokość drzewa BST złożonego z n węzłów?",
            options: [
                { text: "$O(n)$ (lub dokładnie $n-1$)", isCorrect: true },
                { text: "$O(\\log n)$", isCorrect: false },
                { text: "$O(1)$", isCorrect: false },
                { text: "$O(n \\log n)$", isCorrect: false }
            ]
        },
        {
            id: 29,
            category: "3. Struktury danych: Drzewa (BST, AVL, Czerwono-Czarne)",
            text: "Jaki jest koszt wyszukiwania w zrównoważonym drzewie BST (np. AVL)?",
            options: [
                { text: "$O(\\log n)$", isCorrect: true },
                { text: "$O(n)$", isCorrect: false },
                { text: "$O(1)$", isCorrect: false },
                { text: "$O(n \\log n)$", isCorrect: false }
            ]
        },
        {
            id: 36,
            category: "3. Struktury danych: Drzewa (BST, AVL, Czerwono-Czarne)",
            text: "Jaka jest maksymalna wysokość drzewa AVL składającego się z $n$ węzłów?",
            options: [
                { text: "$\\approx 1.44 \\log_2 n$", isCorrect: true },
                { text: "Dokładnie $\\log_2 n$", isCorrect: false },
                { text: "$O(n)$", isCorrect: false },
                { text: "$\\approx 2 \\log_2 n$", isCorrect: false }
            ]
        },
        {
            id: 41,
            category: "3. Struktury danych: Drzewa (BST, AVL, Czerwono-Czarne)",
            text: "Jakiego koloru zawsze musi być korzeń i liście (węzły NIL) w drzewie czerwono-czarnym?",
            options: [
                { text: "Czarny", isCorrect: true },
                { text: "Czerwony", isCorrect: false },
                { text: "Korzeń czerwony, liście czarne", isCorrect: false },
                { text: "Zależy od współczynnika wyważenia", isCorrect: false }
            ]
        },

        {
            id: 10,
            category: "4. Struktury danych: Kopce",
            text: "Jaki jest koszt operacji decrease-key w kopcu Fibonacciego?",
            options: [
                { text: "Zamortyzowane $O(1)$", isCorrect: true },
                { text: "$O(\\log n)$", isCorrect: false },
                { text: "$O(n)$", isCorrect: false },
                { text: "Zamortyzowane $O(\\log n)$", isCorrect: false }
            ]
        },
        {
            id: 24,
            category: "4. Struktury danych: Kopce",
            text: "Z jaką złożonością buduje się kopiec (Build-Max-Heap) z $n$ elementów z wykorzystaniem metody bottom-up?",
            options: [
                { text: "$O(n)$", isCorrect: true },
                { text: "$O(n \\log n)$", isCorrect: false },
                { text: "$O(\\log n)$", isCorrect: false },
                { text: "$O(n^2)$", isCorrect: false }
            ]
        },

        {
            id: 3,
            category: "5. Struktury danych: Tablice mieszające (Hashing)",
            text: "Czym jest kolizja w tablicy mieszającej?",
            options: [
                { text: "Sytuacją, w której dwa różne klucze hashują do tego samego indeksu (wartości funkcji mieszającej).", isCorrect: true },
                { text: "Próbą usunięcia elementu, którego nie ma w tablicy.", isCorrect: false },
                { text: "Przekroczeniem maksymalnego rozmiaru tablicy.", isCorrect: false },
                { text: "Zapętleniem się funkcji haszującej.", isCorrect: false }
            ]
        },
        {
            id: 22,
            category: "5. Struktury danych: Tablice mieszające (Hashing)",
            text: "Czego przykładem jest próbkowanie kwadratowe (quadratic probing) w tablicach mieszających?",
            options: [
                { text: "Techniki rozwiązywania kolizji poprzez adresowanie otwarte.", isCorrect: true },
                { text: "Doskonałej funkcji haszującej.", isCorrect: false },
                { text: "Metody łańcuchowej (chaining).", isCorrect: false },
                { text: "Metody zmniejszania kosztu zamortyzowanego.", isCorrect: false }
            ]
        },
        {
            id: 33,
            category: "5. Struktury danych: Tablice mieszające (Hashing)",
            text: "Jaki jest koszt wyszukiwania przy użyciu doskonałej funkcji mieszającej (perfect hash function)?",
            options: [
                { text: "$O(1)$ nawet w najgorszym przypadku.", isCorrect: true },
                { text: "$O(\\log n)$ w najgorszym przypadku.", isCorrect: false },
                { text: "Średnio $O(1)$, pesymistycznie $O(n)$.", isCorrect: false },
                { text: "Zależy od wybranej metody rozwiązywania kolizji.", isCorrect: false }
            ]
        },

        {
            id: 8,
            category: "6. Struktury danych: Listy z przeskokami i tablice dynamiczne",
            text: "Ile wynosi w najgorszym przypadku wysokość nowego węzła w liście z przeskokami (skip list)?",
            options: [
                { text: "Zależy od narzuconego limitu (MaxLevel), często ograniczona do $O(\\log n)$.", isCorrect: true },
                { text: "$O(n)$", isCorrect: false },
                { text: "$O(1)$", isCorrect: false },
                { text: "Dokładnie tyle, ile wynosi liczba rzutów monetą.", isCorrect: false }
            ]
        },
        {
            id: 21,
            category: "6. Struktury danych: Listy z przeskokami i tablice dynamiczne",
            text: "Jaka jest złożoność wyszukiwania w strukturze skip list?",
            options: [
                { text: "Oczekiwana: $O(\\log n)$", isCorrect: true },
                { text: "Pesymistyczna: $O(n)$", isCorrect: true },
                { text: "Gwarantowana (pesymistyczna): $O(\\log n)$", isCorrect: false },
                { text: "Oczekiwana: $O(1)$", isCorrect: false }
            ]
        },
        {
            id: 26,
            category: "6. Struktury danych: Listy z przeskokami i tablice dynamiczne",
            text: "Jaki jest zamortyzowany czas wstawiania na koniec dla tablicy dynamicznej podwajającej swój rozmiar?",
            options: [
                { text: "$O(1)$", isCorrect: true },
                { text: "$O(n)$", isCorrect: false },
                { text: "$O(\\log n)$", isCorrect: false },
                { text: "$O(n \\log n)$", isCorrect: false }
            ]
        },
        {
            id: 35,
            category: "6. Struktury danych: Listy z przeskokami i tablice dynamiczne",
            text: "Czym różnią się wskaźniki w liście z przeskokami od wskaźników w standardowej liście jednokierunkowej?",
            options: [
                { text: "Węzły w skip liście mogą posiadać wiele wskaźników 'w przód' (forward pointers) przeskakujących inne węzły.", isCorrect: true },
                { text: "Wskaźniki w skip liście prowadzą wyłącznie w tył.", isCorrect: false },
                { text: "Skip lista zawsze posiada wskaźniki do rodzica i dzieci.", isCorrect: false },
                { text: "Nie ma żadnej różnicy, to inna nazwa na listę cykliczną.", isCorrect: false }
            ]
        },

        {
            id: 1,
            category: "7. Algorytmy grafowe: Najkrótsze ścieżki",
            text: "Jaka jest złożoność algorytmu Dijkstry ze znalezieniem wierzchołka poprzez liniowe przeszukiwanie tablicy (bez kolejki priorytetowej)?",
            options: [
                { text: "$O(|V|^2)$", isCorrect: true },
                { text: "$O((|V| + |E|) \\log |V|)$", isCorrect: false },
                { text: "$O(|V| \\cdot |E|)$", isCorrect: false },
                { text: "$O(|E| \\log |V|)$", isCorrect: false }
            ]
        },
        {
            id: 2,
            category: "7. Algorytmy grafowe: Najkrótsze ścieżki",
            text: "Jaki problem rozwiązuje algorytm Floyda-Warshalla?",
            options: [
                { text: "Problem najkrótszych ścieżek między wszystkimi parami wierzchołków.", isCorrect: true },
                { text: "Problem znalezienia minimalnego drzewa rozpinającego.", isCorrect: false },
                { text: "Problem znalezienia maksymalnego przepływu.", isCorrect: false },
                { text: "Sortowanie topologiczne grafu.", isCorrect: false }
            ]
        },
        {
            id: 4,
            category: "7. Algorytmy grafowe: Najkrótsze ścieżki",
            text: "W jakim grafie algorytm BFS znajduje najkrótsze ścieżki od źródła?",
            options: [
                { text: "W grafie nieważonym (lub o identycznych wagach dla wszystkich krawędzi).", isCorrect: true },
                { text: "W każdym grafie skierowanym, niezależnie od wag.", isCorrect: false },
                { text: "Tylko w drzewach.", isCorrect: false },
                { text: "W grafach z ujemnymi wagami krawędzi.", isCorrect: false }
            ]
        },
        {
            id: 7,
            category: "7. Algorytmy grafowe: Najkrótsze ścieżki",
            text: "Jakich wag krawędzi wymaga algorytm Dijkstry do poprawnego działania?",
            options: [
                { text: "Tylko wag nieujemnych ($\\ge 0$).", isCorrect: true },
                { text: "Dowolnych wag, z wyjątkiem ujemnych cykli.", isCorrect: false },
                { text: "Tylko całkowitych wag.", isCorrect: false },
                { text: "Dowolnych wag.", isCorrect: false }
            ]
        },
        {
            id: 17,
            category: "7. Algorytmy grafowe: Najkrótsze ścieżki",
            text: "Jaka jest złożoność algorytmu Dijkstry przy użyciu kopca Fibonacciego?",
            options: [
                { text: "$O(|E| + |V| \\log |V|)$", isCorrect: true },
                { text: "$O((|V| + |E|) \\log |V|)$", isCorrect: false },
                { text: "$O(|V|^2)$", isCorrect: false },
                { text: "$O(|E| \\log |V|)$", isCorrect: false }
            ]
        },
        {
            id: 28,
            category: "7. Algorytmy grafowe: Najkrótsze ścieżki",
            text: "Do jakiego algorytmu (szukającego minimalnego drzewa rozpinającego) algorytm Dijkstry jest strukturalnie podobny?",
            options: [
                { text: "Do algorytmu Prima.", isCorrect: true },
                { text: "Do algorytmu Kruskala.", isCorrect: false },
                { text: "Do algorytmu Bellmana-Forda.", isCorrect: false },
                { text: "Do algorytmu Floyda-Warshalla.", isCorrect: false }
            ]
        },
        {
            id: 37,
            category: "7. Algorytmy grafowe: Najkrótsze ścieżki",
            text: "Jaka jest złożoność algorytmu Dijkstry z użyciem standardowego kopca binarnego?",
            options: [
                { text: "$O((|V| + |E|) \\log |V|)$", isCorrect: true },
                { text: "$O(|E| + |V| \\log |V|)$", isCorrect: false },
                { text: "$O(|V|^2)$", isCorrect: false },
                { text: "$O(|V| \\cdot |E|)$", isCorrect: false }
            ]
        },

        {
            id: 6,
            category: "8. Algorytmy grafowe: Przeszukiwanie i MST",
            text: "Do czego wykorzystuje się algorytm DFS (Przeszukiwanie w głąb)?",
            options: [
                { text: "Do sortowania topologicznego w grafach DAG.", isCorrect: true },
                { text: "Do wykrywania cykli w grafie.", isCorrect: true },
                { text: "Do znajdowania silnie spójnych składowych.", isCorrect: true },
                { text: "Do znajdowania najkrótszej ścieżki w grafach ważonych.", isCorrect: false }
            ]
        },
        {
            id: 16,
            category: "8. Algorytmy grafowe: Przeszukiwanie i MST",
            text: "Za pomocą jakich algorytmów można znaleźć minimalne drzewo rozpinające (MST)?",
            options: [
                { text: "Algorytmu Kruskala.", isCorrect: true },
                { text: "Algorytmu Prima.", isCorrect: true },
                { text: "Algorytmu Dijkstry.", isCorrect: false },
                { text: "Algorytmu Bellmana-Forda.", isCorrect: false }
            ]
        },
        {
            id: 23,
            category: "8. Algorytmy grafowe: Przeszukiwanie i MST",
            text: "Jakich podstawowych operacji na strukturze zbiorów rozłącznych używa algorytm Kruskala?",
            options: [
                { text: "Make-Set, Find-Set, Union.", isCorrect: true },
                { text: "Push, Pop, Peek.", isCorrect: false },
                { text: "Insert, Extract-Min, Decrease-Key.", isCorrect: false },
                { text: "Enqueue, Dequeue.", isCorrect: false }
            ]
        },
        {
            id: 32,
            category: "8. Algorytmy grafowe: Przeszukiwanie i MST",
            text: "Jaka zależność matematyczna między liczbą krawędzi ($|E|$) a liczbą wierzchołków ($|V|$) zachodzi w drzewie?",
            options: [
                { text: "$|E| = |V| - 1$", isCorrect: true },
                { text: "$|E| = |V|$", isCorrect: false },
                { text: "$|E| = \\frac{|V|(|V|-1)}{2}$", isCorrect: false },
                { text: "$|E| = |V| + 1$", isCorrect: false }
            ]
        },

        {
            id: 15,
            category: "9. Algorytmy grafowe: Sieci przepływowe",
            text: "Co dzieje się z przepustowością krawędzi w sieci przepływowej po znalezieniu ścieżki powiększającej?",
            options: [
                { text: "Zwiększany jest faktyczny przepływ, a w sieci residualnej modyfikowane są przepustowości w przód i w tył.", isCorrect: true },
                { text: "Przepustowość krawędzi zostaje trwale wyzerowana.", isCorrect: false },
                { text: "Graf ulega zniszczeniu, a proces startuje od nowa.", isCorrect: false },
                { text: "Wszystkie wagi w grafie stają się ujemne.", isCorrect: false }
            ]
        },
        {
            id: 34,
            category: "9. Algorytmy grafowe: Sieci przepływowe",
            text: "Do czego służy algorytm Forda-Fulkersona?",
            options: [
                { text: "Do znajdowania maksymalnego przepływu w sieci przepływowej.", isCorrect: true },
                { text: "Do znajdowania najkrótszej ścieżki w sieci o ujemnych wagach.", isCorrect: false },
                { text: "Do budowy minimalnego drzewa rozpinającego.", isCorrect: false },
                { text: "Do sprawdzania czy graf jest dwudzielny.", isCorrect: false }
            ]
        },

        {
            id: 19,
            category: "10. Algorytmy tekstowe (dopasowywanie wzorców)",
            text: "Który algorytm dopasowywania wzorców opiera się na schemacie Hornera (rolling hash)?",
            options: [
                { text: "Algorytm Rabina-Karpa.", isCorrect: true },
                { text: "Algorytm Knutha-Morrisa-Pratta (KMP).", isCorrect: false },
                { text: "Algorytm Boyera-Moore'a.", isCorrect: false },
                { text: "Naiwny algorytm wyszukiwania.", isCorrect: false }
            ]
        },
        {
            id: 20,
            category: "10. Algorytmy tekstowe (dopasowywanie wzorców)",
            text: "W jakim algorytmie może wystąpić \"fałszywe trafienie\" (spurious hit)?",
            options: [
                { text: "W algorytmie Rabina-Karpa (gdy dwa różne ciągi mają ten sam hash).", isCorrect: true },
                { text: "W algorytmie Knutha-Morrisa-Pratta (KMP).", isCorrect: false },
                { text: "W algorytmie Boyera-Moore'a.", isCorrect: false },
                { text: "W budowie drzewa Huffmana.", isCorrect: false }
            ]
        },

        {
            id: 13,
            category: "11. Algorytmy zrandomizowane (teoria)",
            text: "Jaki rodzaj czasu działania najczęściej bada się w przypadku algorytmów zrandomizowanych?",
            options: [
                { text: "Oczekiwany (expected) czas działania.", isCorrect: true },
                { text: "Czas amortyzowany.", isCorrect: false },
                { text: "Dokładny pesymistyczny czas działania.", isCorrect: false },
                { text: "Czas optymistyczny.", isCorrect: false }
            ]
        },
        {
            id: 38,
            category: "11. Algorytmy zrandomizowane (teoria)",
            text: "W jakim celu najczęściej stosuje się randomizację w algorytmach (np. w Randomized Quicksort)?",
            options: [
                { text: "Aby uniezależnić zachowanie algorytmu od konkretnego (np. pesymistycznego) ułożenia danych wejściowych.", isCorrect: true },
                { text: "Aby zagwarantować zawsze idealny, optymistyczny czas wykonania.", isCorrect: false },
                { text: "Aby zmniejszyć wymaganą złożoność pamięciową do zera.", isCorrect: false },
                { text: "Aby pominąć etap partycjonowania tablicy.", isCorrect: false }
            ]
        },

        {
        id: 101,
        category: "Sortowanie: Merge Sort",
        text: "Jakie jest kryterium zakończenia rekurencji w procedurze MergeSort(A, left, right) zgodnie z podanym pseudokodem?",
        options: [
            { text: "Wykonuje się dopóki $left < right$", isCorrect: true },
            { text: "Wykonuje się dopóki $left \\le right$", isCorrect: false },
            { text: "Wykonuje się dopóki $left == right$", isCorrect: false },
            { text: "Wykonuje się dopóki $right == 0$", isCorrect: false }
        ]
    },
    {
        id: 102,
        category: "Sortowanie: Heap Sort",
        text: "W algorytmie Heapsort, jaki jest zakres pętli iterującej przy budowaniu początkowego kopca (procedura BuildHeap)?",
        options: [
            { text: "Od $\\lfloor length[A]/2 \\rfloor$ w dół do 1", isCorrect: true },
            { text: "Od $length[A]$ w dół do 2", isCorrect: false },
            { text: "Od 1 do $\\lfloor length[A]/2 \\rfloor$", isCorrect: false },
            { text: "Od 1 do $length[A]$", isCorrect: false }
        ]
    },
    {
        id: 103,
        category: "Sortowanie: Quick Sort",
        text: "Co zwraca wywołanie operacji Partition w algorytmie Quicksort?",
        options: [
            { text: "Indeks, względem którego tablica została podzielona.", isCorrect: true },
            { text: "Wartość elementu osiowego (pivot).", isCorrect: false },
            { text: "Rozmiar lewej podtablicy.", isCorrect: false },
            { text: "Wskaźnik na nową, pomocniczą podtablicę.", isCorrect: false }
        ]
    },
    {
        id: 104,
        category: "Sortowanie: Bucket Sort",
        text: "W sortowaniu kubełkowym (Bucket Sort), jakim algorytmem sortowana jest domyślnie zawartość pojedynczego kubełka (listy `B[i]`)?",
        options: [
            { text: "Sortowaniem przez wstawianie (Insertion Sort).", isCorrect: true },
            { text: "Szybkim sortowaniem (Quicksort).", isCorrect: false },
            { text: "Sortowaniem przez kopcowanie (Heapsort).", isCorrect: false },
            { text: "Sortowaniem bąbelkowym (Bubble Sort).", isCorrect: false }
        ]
    },
    {
        id: 105,
        category: "Sortowanie: Counting Sort",
        text: "Jaką operację wykonuje pętla `C[i] = C[i] + C[i-1]` w algorytmie sortowania przez zliczanie (Counting Sort)?",
        options: [
            { text: "Oblicza sumy prefiksowe, wyznaczając liczbę elementów mniejszych lub równych $i$.", isCorrect: true },
            { text: "Zeruje zawartość tablicy zliczeń w czasie liniowym.", isCorrect: false },
            { text: "Zlicza bezpośrednio wystąpienia danego klucza w tablicy wejściowej.", isCorrect: false },
            { text: "Odwraca kolejność elementów, aby zagwarantować stabilność sortowania.", isCorrect: false }
        ]
    },
    {
        id: 106,
        category: "Sortowanie: Radix Sort",
        text: "Jakiego wymagania względem procedury pomocniczej `StableSort` przestrzega algorytm Radix Sort?",
        options: [
            { text: "Procedura musi stabilnie sortować tablicę względem pojedynczej pozycj/cyfry $i$.", isCorrect: true },
            { text: "Procedura musi działać w czasie stałym $O(1)$ i sortować w miejscu.", isCorrect: false },
            { text: "Procedura nie może alokować dodatkowej pamięci.", isCorrect: false },
            { text: "Procedura musi opierać się wyłącznie na metodzie \"dziel i zwyciężaj\".", isCorrect: false }
        ]
    },
    {
        id: 107,
        category: "Struktury Danych: Listy",
        text: "Co następuje w pierwszym kroku podczas wstawiania elementu `x` na początek listy jednokierunkowej w funkcji `ListInsert(L, x)`?",
        options: [
            { text: "Zostaje zaktualizowany wskaźnik `next[x] = head[L]`.", isCorrect: true },
            { text: "Wskaźnik `prev[x]` otrzymuje wartość `NIL`.", isCorrect: false },
            { text: "Zostaje usunięty dotychczasowy pierwszy węzeł.", isCorrect: false },
            { text: "Wskaźnik `head[L]` staje się równy `NIL`.", isCorrect: false }
        ]
    },
    {
        id: 108,
        category: "Struktury Danych: Kolejki",
        text: "W jaki sposób rozwiązany jest problem dotarcia wskaźnika dopisywania do końca tablicy podczas wywoływania operacji `Enqueue(Q, x)` (tablica cykliczna)?",
        options: [
            { text: "Jeśli `tail[Q] == length[Q]`, to `tail[Q]` zostaje ustawiony na 1.", isCorrect: true },
            { text: "Zgłaszany jest błąd przepełnienia (overflow).", isCorrect: false },
            { text: "Rozmiar tablicy dynamicznej powiększa się dwukrotnie.", isCorrect: false },
            { text: "Wskaźnik `head[Q]` jest przesuwany do przodu by zwolnić miejsce.", isCorrect: false }
        ]
    },
    {
        id: 109,
        category: "Struktury Danych: Kopce",
        text: "Jaki warunek sprawdza pętla `while` podczas operacji `HeapInsert(A, key)`, aby nowy klucz wędrował w górę kopca?",
        options: [
            { text: "`i > 1` oraz `A[Parent(i)] < key`", isCorrect: true },
            { text: "`i < heap_size` oraz `A[Left(i)] > key`", isCorrect: false },
            { text: "`i > 0` oraz `A[Parent(i)] > key`", isCorrect: false },
            { text: "`A[Left(i)] < key` oraz `A[Right(i)] < key`", isCorrect: false }
        ]
    },
    {
        id: 110,
        category: "Struktury Danych: Kopce",
        text: "Jakie jest pierwsze przesunięcie węzłów wykonywane na początku procedury `HeapExtractMax(A)` tuż po zapamiętaniu zwracanego maksimum?",
        options: [
            { text: "Ostatni węzeł w strukturze `A[heap_size[A]]` trafia do korzenia `A[1]`.", isCorrect: true },
            { text: "Prawe dziecko korzenia zajmuje jego miejsce.", isCorrect: false },
            { text: "Wszystkie elementy przesuwają się o jeden indeks w lewo.", isCorrect: false },
            { text: "Wykonywane jest pełne `BuildHeap` na pozostałej tablicy.", isCorrect: false }
        ]
    },
    {
        id: 111,
        category: "Struktury Danych: Drzewa BST",
        text: "W jakim przypadku procedura wstawiania elementu do drzewa poszukiwań binarnych `TreeInsert(x, k)` przekaże element rekurencyjnie do lewego poddrzewa?",
        options: [
            { text: "Gdy `k < key[x]`.", isCorrect: true },
            { text: "Gdy `k > key[x]`.", isCorrect: false },
            { text: "Gdy lewe dziecko ma pusty wskaźnik `NULL`.", isCorrect: false },
            { text: "Decyduje o tym losowy wskaźnik w celu balansowania wysokości.", isCorrect: false }
        ]
    },
    {
        id: 112,
        category: "Struktury Danych: Drzewa BST",
        text: "Jaką operację zakłada algorytm usuwania węzła z drzewa binarnego (zarys algorytmu), jeśli węzeł posiada dwoje dzieci?",
        options: [
            { text: "Zamienić go z bezpośrednim następnikiem (lub poprzednikiem) i usunąć go z nowej lokacji.", isCorrect: true },
            { text: "Zastąpić lewym dzieckiem, a prawe podpiąć na prawo od największego węzła poddrzewa.", isCorrect: false },
            { text: "Zgłosić błąd i uniemożliwić usunięcie takiego węzła.", isCorrect: false },
            { text: "Wykonać rotację w lewo lub w prawo aż węzeł stanie się liściem.", isCorrect: false }
        ]
    },
    {
        id: 113,
        category: "Struktury Danych: Drzewa AVL",
        text: "W jaki sposób procedura `balanceFactor(Node x)` oblicza współczynnik wyważenia w zbalansowanym drzewie AVL?",
        options: [
            { text: "Zwraca różnicę: `height(x.left) - height(x.right)`.", isCorrect: true },
            { text: "Zwraca sumę: `height(x.left) + height(x.right)`.", isCorrect: false },
            { text: "Sprawdza relację: `max(height(x.left), height(x.right))`.", isCorrect: false },
            { text: "Mierzy różnicę wag kluczy lewego i prawego syna.", isCorrect: false }
        ]
    },
    {
        id: 114,
        category: "Struktury Danych: Drzewa AVL",
        text: "Gdzie podpina się dotychczasowe lewe poddrzewo prawego dziecka (`y.left`) podczas pojedynczej rotacji w lewo (`rotateLeft(x)`)?",
        options: [
            { text: "Staje się prawym poddrzewem obracanego węzła (`x.right = y.left`).", isCorrect: true },
            { text: "Staje się nowym korzeniem (`root = y.left`).", isCorrect: false },
            { text: "Zostaje usunięte z drzewa.", isCorrect: false },
            { text: "Trafia do węzła z najmniejszą wartością klucza.", isCorrect: false }
        ]
    },
    {
        id: 115,
        category: "Struktury Danych: Drzewa Czerwono-Czarne",
        text: "Jaki kolor otrzymuje każdy nowy węzeł wstawiany do drzewa czerwono-czarnego na samym początku metody `rbInsert(x)`?",
        options: [
            { text: "Czerwony (`x->color = RED`).", isCorrect: true },
            { text: "Czarny (`x->color = BLACK`).", isCorrect: false },
            { text: "Szary (`x->color = GRAY`).", isCorrect: false },
            { text: "Naprzemienny z kolorem jego ojca.", isCorrect: false }
        ]
    },
    {
        id: 116,
        category: "Struktury Danych: Skip Lists",
        text: "Podczas przeszukiwania list z przeskokami (Search w Skip Lists), w jaki sposób iterujemy po kolejnych poziomach w głównej pętli algorytmu?",
        options: [
            { text: "Schodzimy poziomami w dół: `for i = list.level downto 1 do`.", isCorrect: true },
            { text: "Wspinamy się po poziomach: `for i = 1 to list.level do`.", isCorrect: false },
            { text: "Losowo wybieramy poziom początkowy: `i = randomLevel()`.", isCorrect: false },
            { text: "Analizujemy wyłącznie najwyższy poziom, po czym operujemy wskaźnikiem na węzeł bazowy.", isCorrect: false }
        ]
    },
    {
        id: 117,
        category: "Struktury Danych: Skip Lists",
        text: "Skąd pobierana jest wysokość dodawanego węzła (ilość nadanych wskaźników) podczas wstawiania w algorytmie Skip Lists?",
        options: [
            { text: "Z metody pseudolosowej `lvl = randomLevel()`.", isCorrect: true },
            { text: "Jest stała i wynosi zawsze maksymalny dozwolony `MaxLevel`.", isCorrect: false },
            { text: "Zależy ściśle od wagi wstawianego klucza.", isCorrect: false },
            { text: "Jest pobierana od wartości poziomu poprzedniego wierzchołka.", isCorrect: false }
        ]
    },
    {
        id: 118,
        category: "Struktury Danych: Tablice Haszujące",
        text: "Co wymusza wyjście z pętli sprawdzania konfliktów w metodzie `HASH-INSERT` w adresowaniu otwartym, jeżeli nie odnajdziemy wolnego miejsca?",
        options: [
            { text: "Brak zalezienia miejsca po sprawdzeniu wszystkich pozycji: `i == m`.", isCorrect: true },
            { text: "Przekroczenie ujemnego limitu indeksowania.", isCorrect: false },
            { text: "Naruszenie reguły haszowania modularnego.", isCorrect: false },
            { text: "Napotkanie wskaźnika `NIL` (co natychmiast wywołuje powrót).", isCorrect: false }
        ]
    },
    {
        id: 119,
        category: "Statystyki Pozycyjne",
        text: "W jaki sposób drzewa ze statystykami pozycyjnymi wyznaczają relatywną rangę `r` bieżącego węzła podczas wywołania `OS-Select(x, i)`?",
        options: [
            { text: "Jako wielkość poddrzewa lewego powiększona o jeden: `r = x->left->size + 1`.", isCorrect: true },
            { text: "Jako głębokość węzła na najdłuższej gałęzi od korzenia.", isCorrect: false },
            { text: "Sumując wielkości wszystkich przodków.", isCorrect: false },
            { text: "Tylko jako wartość `x->size`.", isCorrect: false }
        ]
    },
    {
        id: 120,
        category: "Wyszukiwanie Elementów",
        text: "Z jaką złożonością czasową operacja iteracyjnego szukania minimum (`MINIMUM(A)`) znajduje optymalny wierzchołek?",
        options: [
            { text: "W złożoności $O(n-1)$, przeglądając zbiór jednoelementowymi porównaniami od indeksu 2.", isCorrect: true },
            { text: "W złożoności $O(1)$, pod warunkiem że użyto kopca Fibonacciego.", isCorrect: false },
            { text: "W złożoności $O(\\log n)$ za pomocą funkcji `Partition`.", isCorrect: false },
            { text: "W złożoności $O(n \\log n)$ po posortowaniu tablicy.", isCorrect: false }
        ]
    },
    {
        id: 121,
        category: "Grafy: Przeszukiwanie (BFS / DFS)",
        text: "Jakiego koloru jest wierzchołek, który znajduje się obecnie wewnątrz kolejki operacyjnej podczas wykonywania algorytmu Przeszukiwania Wszerz (BFS)?",
        options: [
            { text: "Szarego (GRAY).", isCorrect: true },
            { text: "Białego (WHITE).", isCorrect: false },
            { text: "Czarnego (BLACK).", isCorrect: false },
            { text: "Czerwonego (RED).", isCorrect: false }
        ]
    },
    {
        id: 122,
        category: "Grafy: Przeszukiwanie (BFS / DFS)",
        text: "Jak oznaczany jest czas rozpoczęcia i zakończenia przetwarzania węzła w operacji przeszukiwania w głąb `DFS-Visit(u)`?",
        options: [
            { text: "Jako dwie zmienne czasu: czas wejścia `u->d` (discovery) oraz czas wyjścia `u->f` (finish).", isCorrect: true },
            { text: "Jako głębokość w drzewie przeszukiwań (depth).", isCorrect: false },
            { text: "Pobierany jest jedynie znacznik `YELLOW` zastępowany na sam koniec przez `WHITE`.", isCorrect: false },
            { text: "Jako liczba wchodzących odgałęzień wierzchołka `u`.", isCorrect: false }
        ]
    },
    {
        id: 123,
        category: "Grafy: Minimalne Drzewo Rozpinające (MST)",
        text: "Jakie wartości startowe nadaje się tablicy kluczy (`key[v]`) w procedurze algorytmu Prima `MST-Prim` dla wszystkich wierzchołków?",
        options: [
            { text: "Dla wszystkich z wyjątkiem korzenia nadawana jest wartość $\\infty$ (nieskończoność).", isCorrect: true },
            { text: "Wszystkie klucze zostają wyzerowane (`0`).", isCorrect: false },
            { text: "Nadawana jest im ujemna wartość $-1$.", isCorrect: false },
            { text: "Każdy wierzchołek przechowuje sumę wag jego bezpośrednich incydencji.", isCorrect: false }
        ]
    },
    {
        id: 124,
        category: "Grafy: Najkrótsze Ścieżki",
        text: "Który fragment decyduje o aktualizacji wagi d[v] w procedurze `Relax(u, v, w)` używanej w algorytmach Bellmana-Forda i Dijkstry?",
        options: [
            { text: "Warunek `if (d[v] > d[u] + w(u,v))`.", isCorrect: true },
            { text: "Pętla `while (d[v] != \infty)`.", isCorrect: false },
            { text: "Warunek `if (w(u,v) < 0)` sprawdzający ujemne wagi krawędzi.", isCorrect: false },
            { text: "Zawsze wykonuje relaksację, bez dodatkowych warunków na wartości $d[v]$.", isCorrect: false }
        ]
    },
    {
        id: 125,
        category: "Grafy: Najkrótsze Ścieżki",
        text: "Co udowadnia operacja iterowania po krawędziach i warunek `if (d[v] > d[u] + w(u,v))` w ostatniej fazie w pseudokodzie algorytmu Bellmana-Forda?",
        options: [
            { text: "Wykrywa obecność cyklu o wagach ujemnych, zwracając status braku rozwiązania (False).", isCorrect: true },
            { text: "Pobiera z kolejki minimum dla każdego pozostałego wierzchołka.", isCorrect: false },
            { text: "Pozwala odciąć graf w miejscach składowych silnie spójnych.", isCorrect: false },
            { text: "Optymalizuje znalezienie drogi przez modyfikację odległości heurystycznej.", isCorrect: false }
        ]
    },
    {
        id: 126,
        category: "Grafy: Minimalne Drzewo Rozpinające (MST)",
        text: "Co dokładnie robi algorytm Kruskala zaraz po umieszczeniu każdego wierzchołka w osobnej strukturze `MakeSet(v)`?",
        options: [
            { text: "Sortuje zbiór krawędzi `E` malejąco względem ich rosnących wag w.", isCorrect: true },
            { text: "Wybiera najdroższą krawędź do wyeliminowania z minimalnego przekroju.", isCorrect: false },
            { text: "Rekurencyjnie wykonuje połączenie za pomocą algorytmu `DFS` z powrotem krawędzi.", isCorrect: false },
            { text: "Dołącza losowe gałęzie do poddrzew, aż zaspokoi zależność $|E| = |V| - 1$.", isCorrect: false }
        ]
    },
    {
        id: 127,
        category: "Grafy: Najkrótsze Ścieżki (wszystkie pary)",
        text: "Z jakiej równości rekurencyjnej korzysta klasyczny algorytm Floyda-Warshalla zawarty w potrójnej pętli iteracyjnej?",
        options: [
            { text: "$D_k(i,j) = \\min(D_{k-1}(i,j), D_{k-1}(i,k) + D_{k-1}(k,j))$", isCorrect: true },
            { text: "$D_k(i,j) = D_{k-1}(i,j) + D_{k-1}(i,k) - D_{k-1}(k,j)$", isCorrect: false },
            { text: "$D_k(i,j) = \\max(D_{k-1}(i,j), w(i, j))$", isCorrect: false },
            { text: "$D_k(i,j) = \\sum D_{k-1}(i,k)$", isCorrect: false }
        ]
    },
    {
        id: 128,
        category: "Grafy: Sieci Przepływowe",
        text: "Czym skutkuje warunek skośnej symetrii podczas wyliczania nowego przepływu dla krawędzi antyrównoległej w metodzie Forda-Fulkersona?",
        options: [
            { text: "Przepływ na krawędzi powrotnej jest przypisywany jako zanegowana wartość nowo dodanego przepływu: `f[v,u] = -f[u,v]`.", isCorrect: true },
            { text: "Odcięciem (cut) drogi rezydualnej w grafie.", isCorrect: false },
            { text: "Podwojeniem wartości wagi ujemnej przepustowości.", isCorrect: false },
            { text: "Ignorowaniem przepływów zerowych.", isCorrect: false }
        ]
    },
    {
        id: 129,
        category: "Algorytmy Tekstowe",
        text: "W algorytmie Rabina-Karpa wyliczana jest suma kontrolna w tzw. rolling hash (ruchomym oknie). Jak usuwany jest wpływ znaku wypadającego z okna?",
        options: [
            { text: "Odjęciem w pętli wielkości `T[s+1]*h`, gdzie `h = d^{m-1} \\bmod q`.", isCorrect: true },
            { text: "Podzieleniem reszty w module przez skrót `P[i]`.", isCorrect: false },
            { text: "Stosując operację bitowego przesunięcia (shift) do tablicy przejść.", isCorrect: false },
            { text: "Sprawdzaniem wyrazu naiwnie bez przeliczania całości i inkrementowania o $k$.", isCorrect: false }
        ]
    },
    {
        id: 130,
        category: "Algorytmy Tekstowe",
        text: "W jaki sposób algorytm KMP (Knuth-Morris-Pratt) zarządza niezgodnością przyrównywanego wzorca na pozycji `q+1`?",
        options: [
            { text: "Modyfikuje wskaźnik zgodności na bieżącą długość największego przedrostka: `q = \\pi[q]`.", isCorrect: true },
            { text: "Podejmuje pełne sprawdzenie do tyłu cofając iterację na `i=0`.", isCorrect: false },
            { text: "Generuje wartość z procedury 'złego znaku' (bad character shift).", isCorrect: false },
            { text: "Pomija całą ramkę przesuwając indeks badany o długość `m`.", isCorrect: false }
        ]
    },

    {
        id: 131,
        category: "1. Sortowanie: Merge Sort",
        text: "W procedurze scalania `Merge(A, left, mid, right)` zapisanej w pseudokodzie, jaki warunek sprawdzany jest w głównej pętli `while`, by decydować o pobieraniu elementów z podtablic?",
        options: [
            { text: "`while (idL <= mid && idR <= right)`", isCorrect: true },
            { text: "`while (idL < mid && idR < right)`", isCorrect: false },
            { text: "`while (idL != mid || idR != right)`", isCorrect: false },
            { text: "`while (idB < right - left + 1)`", isCorrect: false }
        ]
    },
    {
        id: 132,
        category: "2. Sortowanie: Heap Sort",
        text: "Dlaczego główna pętla w procedurze `Heapsort(A)` iteruje w dół aż do wartości 2 (`downto 2`), a nie do 1?",
        options: [
            { text: "Gdy w kopcu zostaje 1 element, znajduje się on już na właściwej, posortowanej pozycji w tablicy.", isCorrect: true },
            { text: "Pętla do 1 spowodowałaby błąd `IndexOutOfBounds` przy wywołaniu `Heapify`.", isCorrect: false },
            { text: "Ostatni element jest sztucznym wartownikiem (sentinel).", isCorrect: false },
            { text: "Algorytm przetwarza elementy parami, więc indeks 1 jest uwzględniany razem z 2.", isCorrect: false }
        ]
    },
    {
        id: 133,
        category: "3. Sortowanie: Quick Sort",
        text: "W procedurze `Partition(A, p, r)` w wariancie Hoare'a, jakie są początkowe wartości wskaźników `i` oraz `j` przed wejściem w nieskończoną pętlę `while (true)`?",
        options: [
            { text: "`i = p - 1` oraz `j = r + 1`", isCorrect: true },
            { text: "`i = p` oraz `j = r`", isCorrect: false },
            { text: "`i = p` oraz `j = r - 1`", isCorrect: false },
            { text: "`i = 0` oraz `j = length[A]`", isCorrect: false }
        ]
    },
    {
        id: 134,
        category: "4. Sortowanie: Counting Sort",
        text: "Dlaczego w ostatniej fazie procedury `Counting Sort`, przepisującej elementy do tablicy wynikowej `B`, pętla iteruje od `n` w dół do 1 (`downto 1`)?",
        options: [
            { text: "Aby zachować stabilność sortowania (elementy o równych kluczach zachowują oryginalny porządek).", isCorrect: true },
            { text: "Aby poprawnie wyzerować tablicę `C` w tym samym przebiegu.", isCorrect: false },
            { text: "Ponieważ algorytm sortuje liczby malejąco.", isCorrect: false },
            { text: "Z powodu indeksowania tablicy od tyłu w strukturze stosu.", isCorrect: false }
        ]
    },
    {
        id: 135,
        category: "5. Sortowanie: Bucket Sort",
        text: "W algorytmie `Bucket-Sort(A)`, jaka formuła matematyczna jest używana do przypisania elementu wejściowego `A[i]` do odpowiedniego kubełka w tablicy `B`?",
        options: [
            { text: "`FLOOR(n * A[i])`", isCorrect: true },
            { text: "`A[i] mod n`", isCorrect: false },
            { text: "`CEILING(A[i] / n)`", isCorrect: false },
            { text: "`FLOOR(A[i] * k)`", isCorrect: false }
        ]
    },
    {
        id: 136,
        category: "6. Struktury danych: Kopce",
        text: "Co zakłada prewarunek procedury `Heapify(A, i)` dotyczący lewego i prawego dziecka węzła `i`?",
        options: [
            { text: "Poddrzewa o korzeniach w `Left(i)` oraz `Right(i)` są już poprawnymi kopcami.", isCorrect: true },
            { text: "Węzeł `i` jest większy od obu swoich dzieci.", isCorrect: false },
            { text: "Węzły potomne są posortowane rosnąco w strukturze tablicy.", isCorrect: false },
            { text: "Wysokość obu poddrzew jest dokładnie taka sama.", isCorrect: false }
        ]
    },
    {
        id: 137,
        category: "7. Struktury danych: Kolejki Priorytetowe",
        text: "W zoptymalizowanym wstawianiu elementu `HeapInsert(A, key)`, zamiast klasycznego zamieniania miejscami (`Swap`), co robi kod przy wędrowaniu w górę gałęzi kopca?",
        options: [
            { text: "Kopiuje wartość rodzica bezpośrednio do obecnego węzła: `A[i] = A[Parent(i)]`, oszczędzając operacje zapisu.", isCorrect: true },
            { text: "Przesuwa wskaźnik rekurencyjnie bez nadpisywania danych.", isCorrect: false },
            { text: "Używa XOR-swap na bitach kluczy, by nie alokować dodatkowej zmiennej.", isCorrect: false },
            { text: "Czeka do końca pętli, aby wykonać pełne wywołanie `BuildHeap`.", isCorrect: false }
        ]
    },
    {
        id: 138,
        category: "8. Struktury danych: Listy Wiązane",
        text: "W procedurze usuwania węzła `ListDelete(L, x)` z listy dwukierunkowej, jak sprawdzane jest czy węzeł `x` jest głową listy?",
        options: [
            { text: "Przez warunek sprawdzający, czy wskaźnik poprzednika to NIL: `if (prev[x] == NIL)`.", isCorrect: true },
            { text: "Sprawdzając flagę `isHead(x)` zapisaną w metadanych węzła.", isCorrect: false },
            { text: "Porównując indeks węzła z wartością 1.", isCorrect: false },
            { text: "Wykonując `while (next[x] != NIL)`.", isCorrect: false }
        ]
    },
    {
        id: 139,
        category: "9. Struktury danych: Kolejka FIFO",
        text: "W tablicowej implementacji kolejki cyklicznej, co dzieje się ze wskaźnikiem usunięcia (`head[Q]`) w procedurze `Dequeue(Q)`, gdy osiągnie on koniec tablicy `length[Q]`?",
        options: [
            { text: "Wraca na początek tablicy: `head[Q] = 1`.", isCorrect: true },
            { text: "Ustawiany jest na wartość `NIL`, blokując kolejne operacje.", isCorrect: false },
            { text: "Tablica jest realokowana, a `head[Q]` wskazuje na jej środek.", isCorrect: false },
            { text: "Zgłaszany jest wyjątek `overflow`.", isCorrect: false }
        ]
    },
    {
        id: 140,
        category: "10. Struktury danych: Drzewa AVL",
        text: "W procedurze `rotateLeft(x)`, jaki węzeł przejmuje rolę lewego dziecka dla dawnego prawego dziecka `y`?",
        options: [
            { text: "Obecny korzeń poddrzewa (węzeł `x`).", isCorrect: true },
            { text: "Dotychczasowe lewe dziecko `x` (`x.left`).", isCorrect: false },
            { text: "Rodzic węzła `x` (`x.parent`).", isCorrect: false },
            { text: "Węzeł o najmniejszym kluczu w poddrzewie `y`.", isCorrect: false }
        ]
    },
    {
        id: 141,
        category: "11. Struktury danych: Drzewa Czerwono-Czarne",
        text: "Co wyzwala naprawę w pętli `while` podczas wstawiania w procedurze `rbInsert(x)`?",
        options: [
            { text: "Fakt, że rodzic nowo wstawionego, czerwonego węzła jest również czerwony: `x->p->color == RED`.", isCorrect: true },
            { text: "Wykrycie naruszenia współczynnika balansu $BF > 1$.", isCorrect: false },
            { text: "Sytuacja, gdy nowo wstawiony węzeł nadpisze istniejący klucz.", isCorrect: false },
            { text: "Fakt, że wujek wstawianego węzła jest zawsze czarny.", isCorrect: false }
        ]
    },
    {
        id: 142,
        category: "12. Struktury danych: Drzewa Czerwono-Czarne",
        text: "W \"Przypadku 1\" procedury `rbInsert(x)` w drzewie czerwono-czarnym (gdy rodzic i wujek są CZERWONI), jakie operacje zmiany kolorów zachodzą?",
        options: [
            { text: "Rodzic i wujek stają się CZARNI, a dziadek staje się CZERWONY.", isCorrect: true },
            { text: "Rodzic staje się CZARNY, a nowo dodany węzeł pozostaje CZERWONY, kończąc naprawę.", isCorrect: false },
            { text: "Dziadek staje się CZARNY, a całe poddrzewo zostaje obrócone w prawo.", isCorrect: false },
            { text: "Węzeł `x` staje się CZARNY, co pociąga za sobą czarną rotację dziadka.", isCorrect: false }
        ]
    },
    {
        id: 143,
        category: "13. Struktury danych: Skip Lists",
        text: "W procedurze `Insert(List, searchKey, newValue)` w liście z przeskokami, do czego służy lokalna tablica `update[MaxLevel]`?",
        options: [
            { text: "Przechowuje wskaźniki na węzły z każdego poziomu, tuż przed miejscem wstawienia nowego elementu, by móc poprawić ich referencje.", isCorrect: true },
            { text: "Zapisuje historię losowań algorytmu `randomLevel()`, aby zachować entropię drzewa.", isCorrect: false },
            { text: "Buforuje wartości zmiennych usuwanych z listy do czasu wezwania garbage collectora.", isCorrect: false },
            { text: "Monitoruje maksymalną liczbę przeskoków w dotychczasowych zapytaniach `Search`.", isCorrect: false }
        ]
    },
    {
        id: 144,
        category: "14. Struktury danych: Tablice Haszujące",
        text: "W metodzie `HASH-INSERT(T, k)` dla adresowania otwartego, jaki jest warunek pętli głównej `while` przeszukującej komórki?",
        options: [
            { text: "Ogranicza się do liczby iteracji `i <> m`, aby nie działać w nieskończoność.", isCorrect: true },
            { text: "Działa póki funkcja haszująca nie wygeneruje kolizji: `while (T[j] == NIL)`.", isCorrect: false },
            { text: "Opiera się na sprawdzeniu, czy hash jest wartością pierwszą.", isCorrect: false },
            { text: "Działa aż osiągnie początek tablicy poprzez wskaźnik cykliczny: `j != 0`.", isCorrect: false }
        ]
    },
    {
        id: 145,
        category: "15. Statystyki Pozycyjne",
        text: "W metodzie iteracyjnej szukania minimum `MINIMUM(A)`, dla optymalizacji jak przebiega iteracja pętli po ustaleniu początkowego przypisania `min = A[1]`?",
        options: [
            { text: "Rozpoczyna się od indeksu `i = 2` do długości tablicy, co daje $n-1$ porównań.", isCorrect: true },
            { text: "Dzieli tablicę na pół i szuka w czasie $\\log n$.", isCorrect: false },
            { text: "Przebiega od końca tablicy do `i = 1`, stosując wartownika.", isCorrect: false },
            { text: "Losowo wybiera $k$ elementów i zwraca najmniejszy z nich jako przybliżenie.", isCorrect: false }
        ]
    },
    {
        id: 146,
        category: "16. Statystyki Pozycyjne",
        text: "W procedurze wyboru `OS-Select(x, i)` (drzewa ze statystykami pozycyjnymi), na jakiej podstawie ustalany jest powrót samego węzła (`return x`)?",
        options: [
            { text: "Gdy ranga bieżącego węzła `r` jest równa szukanemu indeksowi `i` (`if i == r`).", isCorrect: true },
            { text: "Gdy wielkość lewego i prawego poddrzewa jest idealnie zbalansowana.", isCorrect: false },
            { text: "Gdy licznik rekurencji zrówna się z wysokością drzewa.", isCorrect: false },
            { text: "Gdy węzeł `x` ma wartość klucza zgodną z poszukiwaną `k`.", isCorrect: false }
        ]
    },
    {
        id: 147,
        category: "17. Algorytmy grafowe: Przeszukiwanie DFS",
        text: "W algorytmie DFS, po przetworzeniu wierzchołka `u` oraz wywołaniu na wszystkich jego sąsiadach `DFS_Visit(v)`, jaki kolor otrzymuje wierzchołek `u` oraz jaka wartość czasu jest w nim zapisywana?",
        options: [
            { text: "Kolor zostaje zmieniony na `BLACK`, a w węźle zapisywany jest czas wyjścia (zakończenia) `u->f = time`.", isCorrect: true },
            { text: "Kolor zostaje zmieniony na `WHITE`, co oznacza, że węzeł może zostać dodany do drzewa MST.", isCorrect: false },
            { text: "Kolor zostaje zmieniony na `GRAY`, a operacja `ExtractMin` usuwa węzeł ze stosu.", isCorrect: false },
            { text: "Węzeł staje się `RED`, odznaczając występowanie cyklu w krawędziach powrotnych.", isCorrect: false }
        ]
    },
    {
        id: 148,
        category: "18. Algorytmy grafowe: Bellman-Ford",
        text: "Jakie działanie jest wykonywane po głównej pętli $V-1$ relaksacji w pseudokodzie algorytmu Bellmana-Forda?",
        options: [
            { text: "Wykonywane jest jeszcze jedno przejście przez wszystkie krawędzie w celu wykrycia ujemnych cykli (`if d[v] > d[u] + w(u,v)`).", isCorrect: true },
            { text: "Tablica wyników jest sortowana topologicznie celem znalezienia drogi krytycznej.", isCorrect: false },
            { text: "Graf jest odwracany i algorytm wywołuje sam siebie, tworząc silnie spójne składowe.", isCorrect: false },
            { text: "Zwracana jest macierz długości wszystkich krawędzi $D_{N}$.", isCorrect: false }
        ]
    },
    {
        id: 149,
        category: "19. Algorytmy grafowe: Kruskal",
        text: "W algorytmie Kruskala `MST-Kruskal(G, w)`, jaki warunek jest warunkiem dodania badanej krawędzi `(u,v)` do lasu drzew rozpinających `A`?",
        options: [
            { text: "Jej wierzchołki końcowe należą do różnych zbiorów (`FindSet(u) != FindSet(v)`).", isCorrect: true },
            { text: "Waga krawędzi `w(u,v)` jest ujemna, by spełnić zasady relaksacji.", isCorrect: false },
            { text: "Przynajmniej jeden z wierzchołków jest zabarwiony na `WHITE`.", isCorrect: false },
            { text: "Liczba krawędzi w `A` nie przekroczyła $|V|$.", isCorrect: false }
        ]
    },
    {
        id: 150,
        category: "20. Algorytmy grafowe: Dijkstra",
        text: "Co charakteryzuje instrukcję relaksacyjną w algorytmie Dijkstry podczas przechodzenia przez sąsiadów wierzchołka `u`?",
        options: [
            { text: "Jeśli znaleziona zostanie krótsza ścieżka do wierzchołka `v`, następuje zaktualizowanie wartości klucza `d[v]` oraz wykonanie `Decrease-Key` na kolejce priorytetowej.", isCorrect: true },
            { text: "Algorytm aktualizuje koszt tylko wtedy, gdy poprzednia krawędź uległa ujemnej zmianie na stosie.", isCorrect: false },
            { text: "Wykonuje się dodawanie po zliczeniu dróg niezależnych (metoda ścieżek powiększających).", isCorrect: false },
            { text: "Zawsze modyfikuje `v->color = GRAY`, bez względu na koszt odległości.", isCorrect: false }
        ]
    },
    {
        id: 151,
        category: "21. Algorytmy grafowe: Floyd-Warshall",
        text: "Czym jest macierz startowa $D_0$ używana do inicjalizacji algorytmu Floyda-Warshalla?",
        options: [
            { text: "Bezpośrednią macierzą wag krawędzi między parami wierzchołków (gdzie krawędzie nieistniejące to $\\infty$).", isCorrect: true },
            { text: "Macierzą jednostkową (identity matrix).", isCorrect: false },
            { text: "Macierzą przepustowości rezydualnych grafu $c_f$.", isCorrect: false },
            { text: "Wymuszonym przez definicję wyznacznikiem grafu transponowanego.", isCorrect: false }
        ]
    },
    {
        id: 152,
        category: "22. Algorytmy grafowe: Floyd-Warshall",
        text: "Co oznacza wewnętrzne odwołanie $D_{k}(i, j) = \\min(D_{k-1}(i, j), D_{k-1}(i, k) + D_{k-1}(k, j))$ w algorytmie Floyda-Warshalla?",
        options: [
            { text: "Sprawdzamy, czy dopuszczenie węzła `k` jako wierzchołka pośredniego skróci dotychczasową najkrótszą ścieżkę od `i` do `j`.", isCorrect: true },
            { text: "Liczymy maksymalny przypływ w sieci blokującej użycie krawędzi o indeksie `k`.", isCorrect: false },
            { text: "Sprawdzamy obecność ujemnego cyklu wykorzystując twierdzenie o relaksacji trójkątnej.", isCorrect: false },
            { text: "Aktualizujemy zbiór krawędzi mostujących na grafach spójnych.", isCorrect: false }
        ]
    },
    {
        id: 153,
        category: "23. Algorytmy grafowe: Ford-Fulkerson",
        text: "Jak zdefiniowana jest przepustowość nowej ścieżki powiększającej $c_f(p)$ znalezionej w sieci rezydualnej wewnątrz `FORD-FULKERSON(G,s,t)`?",
        options: [
            { text: "Jako minimum przepustowości rezydualnych wszystkich krawędzi na ścieżce `p` (`min {cf(u,v) : (u,v) in p}`).", isCorrect: true },
            { text: "Jako suma pojemności krawędzi pomniejszona o sumaryczny przepływ.", isCorrect: false },
            { text: "Jako największa wartość krawędzi ujemnej na drodze przepływu.", isCorrect: false },
            { text: "Jako maksymalna możliwa waga przekroju grafu oddzielającego punkt startowy.", isCorrect: false }
        ]
    },
    {
        id: 154,
        category: "24. Algorytmy Tekstowe: Rabin-Karp",
        text: "Jak przebiega inicjalizacja zmiennej wzorca `p` (hash wzorca) oraz pierwszego okna tekstu `t_0` w algorytmie Rabina-Karpa?",
        options: [
            { text: "Za pomocą pętli o długości `m` iterującej po znakach `P[i]` oraz `T[i]`, wielokrotnie aplikując operacje `(d * p + val) mod q`.", isCorrect: true },
            { text: "Poprzez spłaszczenie ciągów znaków funkcją `XOR` w czasie $O(1)$.", isCorrect: false },
            { text: "Tworząc strukturę drzewa sufiksowego i wywołując na nim post-order.", isCorrect: false },
            { text: "Pobierając wielokrotność liczby pierwszej z tablicy z przeskokami.", isCorrect: false }
        ]
    },
    {
        id: 155,
        category: "25. Algorytmy Tekstowe: Rabin-Karp",
        text: "W głównej pętli wyszukującej algorytmu Rabina-Karpa, co dzieje się, gdy sumy kontrolne się zgadzają (`p == t_s`)?",
        options: [
            { text: "Wywoływane jest dokładne (naiwne) sprawdzenie znak po znaku `P[1..m] == T[s+1..s+m]`, by uniknąć fałszywych trafień (spurious hits).", isCorrect: true },
            { text: "Natychmiast zwracany jest indeks wystąpienia jako absolutnie potwierdzony wynik.", isCorrect: false },
            { text: "Baza modułu `q` zostaje zmieniona na większą liczbę pierwszą celem sprawdzenia krzyżowego.", isCorrect: false },
            { text: "Wzorzec obracany jest zgodnie z tablicą rotacji.", isCorrect: false }
        ]
    },
    {
        id: 156,
        category: "26. Algorytmy Tekstowe: KMP",
        text: "W jaki sposób procedura budowania automatu `Compute-Prefix-Function(P)` reaguje na niezgodność znaku podczas zliczania (`k > 0 and P[k+1] != P[q]`)?",
        options: [
            { text: "Cofa się do krótszego prefikso-sufiksu, nadpisując licznik `k = \pi[k]`.", isCorrect: true },
            { text: "Zwraca błąd dopasowania powodujący zakończenie działania procedury.", isCorrect: false },
            { text: "Wpisuje do tablicy przejść wartość `0` by zmusić wyszukiwarkę do skoku.", isCorrect: false },
            { text: "Wykorzystuje heurystykę złego znaku by podmienić znak na literę najczęstszą.", isCorrect: false }
        ]
    },
    {
        id: 157,
        category: "27. Algorytmy Tekstowe: KMP",
        text: "W głównej procedurze dopasowującej `KMP-Matcher(T, P)`, jeśli długość aktualnie dopasowanego wzorca zrówna się z jego całkowitą długością (`q == m`), jaka komenda jest wykonywana?",
        options: [
            { text: "Algorytm zgłasza znalezienie wzorca z przesunięciem, a następnie wykonuje `q = \pi[m]` aby kontynuować szukanie kolejnych wystąpień.", isCorrect: true },
            { text: "Zatrzymuje pętlę i zakańcza proces zwracając boolowską `TRUE`.", isCorrect: false },
            { text: "Cofa iterację tekstową `i` by potwierdzić stabilność wzorca.", isCorrect: false },
            { text: "Wchodzi do pętli `Compute-Prefix-Function` wyliczając kolejny odcinek funkcji przejścia.", isCorrect: false }
        ]
    },
    {
        id: 158,
        category: "28. Algorytmy Tekstowe: Boyer-Moore",
        text: "Jakie jest główne równanie na przesunięcie okna na tekście `$s$` w przypadku wystąpienia niezgodności we wzorcu w algorytmie Boyer-Moore-Matcher?",
        options: [
            { text: "`s = s + max( \gamma[j], j - \lambda[T[s+j]] )` (gdzie wybieramy większy skok wynikający z heurystyki 'złego znaku' lub 'dobrego sufiksu').", isCorrect: true },
            { text: "`s = s + m - 1` bez żadnych dodatkowych heurystyk.", isCorrect: false },
            { text: "`s = s + \pi[j]` na bazie wyliczeń z automatu tablicowego.", isCorrect: false },
            { text: "`s = s + (T[s+j] % q)` stosując moduł z tablicy mieszającej.", isCorrect: false }
        ]
    },
    {
        id: 159,
        category: "29. Algorytmy Kompresji: Kodowanie Huffmana",
        text: "Na początku kodowania Huffmana, pętla wewnętrzna procedury `HUFFMAN(C)` jest wywoływana $n-1$ razy. Co dokładnie realizuje się w jej pierwszym kroku `z = ALLOCATE_NODE()`?",
        options: [
            { text: "Tworzony jest nowy węzeł wewnętrzny (nie będący początkowo liściem) przed pobraniem z kolejki dwóch najrzadszych węzłów do scalenia.", isCorrect: true },
            { text: "Tworzy on wskaźnik do rekurencyjnej implementacji przeszukiwania DFS w strukturze bitowej.", isCorrect: false },
            { text: "Rezerwuje bit w kodzie wynikowym jako znacznik EOF (End Of File).", isCorrect: false },
            { text: "Usuwa on najrzadszą pozycję ze zbioru minimalizując alfabet kodowania o połowę.", isCorrect: false }
        ]
    },
    {
        id: 160,
        category: "30. Algorytmy Kompresji: Kodowanie Huffmana",
        text: "W algorytmie `HUFFMAN(C)`, jaka operacja jest wykonywana tuż po tym jak przypiszemy łączną częstość `f[z] = f[z->left] + f[z->right]`?",
        options: [
            { text: "Węzeł `z` jest wprowadzany z powrotem do kolejki priorytetowej `INSERT(Q, z)` w celu uwzględnienia go w kolejnych scaleniach.", isCorrect: true },
            { text: "Następuje zwrócenie skompresowanego ciągu wywołań kodowania bitowego.", isCorrect: false },
            { text: "Wynikowy węzeł zostaje zamalowany na CZARNO w przypadku zachowania zasad AVL.", isCorrect: false },
            { text: "Kolejka dokonuje kompresji wymuszonej, zwalniając pamięć po nieużywanych znakach.", isCorrect: false }
        ]
    },
    
    {
        id: 161,
        category: "Algorytmy Geometryczne",
        text: "W jaki sposób algorytm Grahama (znajdowania otoczki wypukłej) wybiera punkt początkowy $P_0$?",
        options: [
            { text: "Wybiera punkt o najmniejszej współrzędnej Y, a w przypadku remisów - o najmniejszej współrzędnej X.", isCorrect: true },
            { text: "Wybiera losowy punkt ze zbioru w celu uniknięcia pesymistycznej złożoności $O(n^2)$.", isCorrect: false },
            { text: "Oblicza środek ciężkości (centroid) wszystkich punktów i wybiera punkt leżący najbliżej niego.", isCorrect: false },
            { text: "Wybiera punkt o największej współrzędnej X i Y jednocześnie.", isCorrect: false }
        ]
    },
    {
        id: 162,
        category: "Algorytmy Geometryczne",
        text: "Na czym opiera się sortowanie punktów w głównym etapie algorytmu Grahama?",
        options: [
            { text: "Na kącie biegunowym, jaki tworzy wektor $\\vec{P_0P_i}$ z dodatnią półosią OX.", isCorrect: true },
            { text: "Na odległości euklidesowej punktów od punktu startowego $P_0$.", isCorrect: false },
            { text: "Na współrzędnej X, od lewej do prawej.", isCorrect: false },
            { text: "Na iloczynie skalarnym względem środka ciężkości.", isCorrect: false }
        ]
    },
    {
        id: 163,
        category: "Algorytmy Geometryczne",
        text: "Jaką technikę wykorzystuje optymalny algorytm znajdowania wszystkich przecięć w zbiorze odcinków (algorytm Shamosa-Hoeya / Bentleya-Ottmanna)?",
        options: [
            { text: "Metodę zamiatania (sweep-line algorithm) przy użyciu miotły poruszającej się wzdłuż osi X i struktury drzewa BST.", isCorrect: true },
            { text: "Algorytm siłowy (brute-force) sprawdzający każdą parę w czasie $O(n^2)$.", isCorrect: false },
            { text: "Programowanie dynamiczne z tablicowaniem wyników wyznaczników.", isCorrect: false },
            { text: "Algorytm \"Dziel i Zwyciężaj\" na osi Y.", isCorrect: false }
        ]
    },
    {
        id: 164,
        category: "Algorytmy Geometryczne",
        text: "Jaka jest złożoność algorytmu szukania najmniej odległej pary punktów wykorzystującego metodę \"Dziel i Zwyciężaj\"?",
        options: [
            { text: "$O(n \\log n)$", isCorrect: true },
            { text: "$O(n)$", isCorrect: false },
            { text: "$O(n^2)$", isCorrect: false },
            { text: "$O(n \\log^2 n)$", isCorrect: false }
        ]
    },
    {
        id: 165,
        category: "Analiza Algorytmów: Koszt Zamortyzowany",
        text: "W analizie kosztu zamortyzowanego (metoda księgowania / accounting method) dla tablic dynamicznych, ile kredytów (jednostek kosztu) standardowo przypisuje się operacji wstawienia, by pokryć przyszłą realokację?",
        options: [
            { text: "3 jednostki (1 na bieżące wstawienie, 1 na skopiowanie tego elementu w przyszłości, 1 na skopiowanie starego elementu).", isCorrect: true },
            { text: "1 jednostkę, ponieważ realokacja dzieje się rzadko i jej koszt dąży do zera.", isCorrect: false },
            { text: "$\\log n$ jednostek, co odpowiada głębokości drzewa wywołań.", isCorrect: false },
            { text: "$n$ jednostek przy każdym wstawieniu.", isCorrect: false }
        ]
    },
    {
        id: 166,
        category: "Analiza Algorytmów: Koszt Zamortyzowany",
        text: "Czym charakteryzuje się analiza zamortyzowana metodą kosztu sumarycznego (aggregate method)?",
        options: [
            { text: "Polega na udowodnieniu, że ciąg $n$ operacji w najgorszym razie trwa $T(n)$, z czego wyciąga się średnią $T(n)/n$ dla jednej operacji.", isCorrect: true },
            { text: "Do każdego stanu struktury przypisuje pewną funkcję potencjału $\\Phi$, która rośnie i maleje w czasie.", isCorrect: false },
            { text: "Opiera się na rachunku prawdopodobieństwa i oczekiwanym czasie wykonania dla losowych danych.", isCorrect: false },
            { text: "Zakłada obciążanie niektórych operacji wirtualnym kosztem (kredytami).", isCorrect: false }
        ]
    },
    {
        id: 167,
        category: "Struktury Danych: Drzewa Czerwono-Czarne (RB)",
        text: "Które z poniższych są ZAWSZE spełnionymi własnościami drzewa Czerwono-Czarnego (zgodnie z definicją z wykładu/Cormena)?",
        options: [
            { text: "Każdy węzeł jest czerwony albo czarny.", isCorrect: true },
            { text: "Każdy liść (węzeł NIL) jest czarny.", isCorrect: true },
            { text: "Jeśli węzeł jest czerwony, to obaj jego synowie muszą być czarni.", isCorrect: true },
            { text: "Długość najdłuższej ścieżki od korzenia do liścia jest równa długości najkrótszej.", isCorrect: false }
        ]
    },
    {
        id: 168,
        category: "Struktury Danych: Drzewa Czerwono-Czarne (RB)",
        text: "Czym jest 'czarna wysokość' (black-height) węzła w drzewie Czerwono-Czarnym?",
        options: [
            { text: "Liczbą czarnych węzłów na dowolnej ścieżce od tego węzła (nie licząc go) do węzła potomnego NIL.", isCorrect: true },
            { text: "Całkowitą liczbą czarnych węzłów w całym drzewie.", isCorrect: false },
            { text: "Różnicą między liczbą czarnych i czerwonych węzłów w prawym poddrzewie.", isCorrect: false },
            { text: "Zamortyzowanym kosztem zmiany koloru węzła z czarnego na czerwony.", isCorrect: false }
        ]
    },
    {
        id: 169,
        category: "Struktury Danych: Drzewa Przedziałowe",
        text: "Jakie dodatkowe informacje (poza standardowymi atrybutami drzewa BST) muszą być przechowywane w każdym węźle drzewa przedziałowego (Interval Tree), aby wyszukiwanie przecięć zajmowało $O(\\log n)$?",
        options: [
            { text: "Wartość `max` – maksymalny prawy koniec ze wszystkich przedziałów znajdujących się w poddrzewie tego węzła.", isCorrect: true },
            { text: "Wartość `size` – liczba elementów znajdujących się w jego prawym poddrzewie.", isCorrect: false },
            { text: "Pole `color` – dla utrzymania zrównoważenia za pomocą własności przedziałów.", isCorrect: false },
            { text: "Tablica wszystkich punktów pokrywających się z przedziałem bazowym.", isCorrect: false }
        ]
    },
    {
        id: 170,
        category: "Algorytmy Tekstowe: Wyszukiwanie Wzorca",
        text: "Na czym polega działanie wyszukiwarki wzorca opartej na Automacie Skończenie Stanowym (FSA)?",
        options: [
            { text: "Buduje automat o $m+1$ stanach dla wzorca o długości $m$, a funkcja przejścia bazuje na najdłuższym prefiksie wzorca będącym jednocześnie sufiksem analizowanego ciągu.", isCorrect: true },
            { text: "Wylicza skrót (hash) dla każdego znaku i porównuje w stałym czasie bitowym.", isCorrect: false },
            { text: "Przeszukuje tekst od prawej do lewej i wykorzystuje tablicę dobrych sufiksów.", isCorrect: false },
            { text: "Kompiluje wyrażenia regularne do drzewa składniowego i wykonuje DFS.", isCorrect: false }
        ]
    },
    {
        id: 171,
        category: "Algorytmy Tekstowe: Boyer-Moore",
        text: "Z jakich heurystyk korzysta oryginalny algorytm Boyera-Moore'a do optymalizacji przesunięć wzorca względem tekstu?",
        options: [
            { text: "Heurystyki \"złego znaku\" (bad character) oraz heurystyki \"dobrego sufiksu\" (good suffix).", isCorrect: true },
            { text: "Tablicy najdłuższych prefikso-sufiksów ($\\pi$).", isCorrect: false },
            { text: "Współczynnika zagęszczenia (load factor).", isCorrect: false },
            { text: "Skracania wskaźników (pointer jumping).", isCorrect: false }
        ]
    },
    {
        id: 172,
        category: "Algorytmy Tekstowe: KMP",
        text: "Czego dokładnie dotyczy wartość $\\pi[q]$ w tablicy (funkcji) przejść w algorytmie Knutha-Morrisa-Pratta?",
        options: [
            { text: "Długości najdłuższego właściwego prefiksu wzorca, który jest jednocześnie właściwym sufiksem podciągu wzorca kończącego się na pozycji $q$.", isCorrect: true },
            { text: "Indeksu, o który należy przesunąć okno, gdy znak na pozycji $q$ w tekście nie pasuje.", isCorrect: false },
            { text: "Liczby powtórzeń danego znaku przed indeksem $q$.", isCorrect: false },
            { text: "Odległości od początku wzorca do ostatniego wystąpienia znaku niezgodnego.", isCorrect: false }
        ]
    },
    {
        id: 173,
        category: "Kompresja Danych",
        text: "Zgodnie z Teorią Informacji Shannona, jeśli litera 'e' występuje w tekście bardzo często, a litera 'q' bardzo rzadko, to jak w optymalnym kodzie (np. Huffmana) będą wyglądały ich reprezentacje bitowe?",
        options: [
            { text: "Częsta litera 'e' dostanie krótki kod bitowy, a rzadka 'q' bardzo długi.", isCorrect: true },
            { text: "Obie litery otrzymają kody tej samej długości, ale 'e' będzie zawierała więcej jedynek.", isCorrect: false },
            { text: "Rzadka litera 'q' dostanie krótszy kod by oszczędzić operacje przeszukiwania w drzewie.", isCorrect: false },
            { text: "Będą miały stałą długość, wynikającą z wyliczenia logarytmu przy podstawie 2 z wielkości alfabetu.", isCorrect: false }
        ]
    },
    {
        id: 174,
        category: "Kompresja Danych",
        text: "Jakie jest główne założenie i sposób działania kompresji LZW w stosunku do kodowania Huffmana?",
        options: [
            { text: "LZW opiera się na budowaniu słownika w czasie rzeczywistym ze spotykanych ciągów znaków (jest algorytmem słownikowym).", isCorrect: true },
            { text: "LZW wymaga dwukrotnego przejścia przez plik (najpierw obliczenie częstotliwości, potem kodowanie).", isCorrect: false },
            { text: "LZW zawsze generuje optymalne drzewo binarne minimalizujące entropię całego pliku.", isCorrect: false },
            { text: "LZW sprawdza się tylko dla danych ciągłych (multimedia), a Huffman tylko dla tekstów.", isCorrect: false }
        ]
    },
    {
        id: 175,
        category: "Algorytmy Równoległe: Taksonomia Flynna",
        text: "Co charakteryzuje architekturę SIMD (Single Instruction, Multiple Data) w taksonomii Flynna?",
        options: [
            { text: "Jeden strumień instrukcji jest wykonywany równocześnie na wielu różnych danych (np. operacje wektorowe na nowoczesnych GPU).", isCorrect: true },
            { text: "Wiele procesorów wykonuje różne instrukcje na tych samych danych dla redundancji (odporność na błędy).", isCorrect: false },
            { text: "Asynchroniczne wykonywanie wielu wątków instrukcji na wielu różnych porcjach danych (typowy wielordzeniowy procesor).", isCorrect: false },
            { text: "Wykonywanie pojedynczego kodu jednowątkowego bez jakiejkolwiek równoległości.", isCorrect: false }
        ]
    },
    {
        id: 176,
        category: "Algorytmy Równoległe: PRAM",
        text: "Co oznacza skrót CREW w kontekście modeli równoległej maszyny RAM (PRAM)?",
        options: [
            { text: "Concurrent Read, Exclusive Write - Wiele procesorów może jednocześnie czytać z tej samej komórki pamięci, ale zapis musi odbywać się na wyłączność.", isCorrect: true },
            { text: "Concurrent Read, Extra Write - Wiele procesorów czyta, zapis dozwolony jest jako operacja dodatkowa o koszcie $O(1)$.", isCorrect: false },
            { text: "Critical Region, Exclusive Write - Sekcja krytyczna blokuje współbieżny dostęp do wyłącznego zapisu.", isCorrect: false },
            { text: "Constant Read, Equivalent Write - Zapisy równe kosztowo odczytom w pamięci stałej.", isCorrect: false }
        ]
    },
    {
        id: 177,
        category: "Algorytmy Równoległe",
        text: "Jaka technika (algorytm) pozwala efektywnie w trybie równoległym wyznaczyć rangę (odległość od końca) każdego elementu w liście jednokierunkowej, skracając czas do $O(\\log n)$?",
        options: [
            { text: "Skracanie wskaźników (pointer jumping / recursive doubling).", isCorrect: true },
            { text: "Zamiatanie płaszczyzny (sweep-line).", isCorrect: false },
            { text: "Próbkowanie kwadratowe (quadratic probing).", isCorrect: false },
            { text: "Sortowanie pozycyjne ze stałą bazą (radix sort).", isCorrect: false }
        ]
    },
    {
        id: 178,
        category: "Algorytmy Sortowania: Teoria",
        text: "Z modelu Drzewa Decyzyjnego dla algorytmów sortowania wynikają ważne ograniczenia matematyczne. Co reprezentują liście takiego drzewa przy sortowaniu tablicy n-elementowej?",
        options: [
            { text: "Każdy liść reprezentuje jedną z $n!$ możliwych permutacji elementów tablicy, które algorytm traktuje jako poprawny, posortowany wynik.", isCorrect: true },
            { text: "Reprezentują wynik każdego wywołania instrukcji 'swap'.", isCorrect: false },
            { text: "Reprezentują maksymalną wysokość kopca binarnego w Heapsorcie.", isCorrect: false },
            { text: "Reprezentują poszczególne elementy wchodzące w skład posortowanej tablicy.", isCorrect: false }
        ]
    },
    {
        id: 179,
        category: "Sieci Przepływowe: Skojarzenia",
        text: "Jak należy zmodyfikować graf dwudzielny $G=(V, E)$, aby problem znalezienia maksymalnego skojarzenia w nim można było rozwiązać za pomocą algorytmu Forda-Fulkersona?",
        options: [
            { text: "Dodać super-źródło $s$ połączone ze wszystkimi węzłami z lewego zbioru krawędziami o przepustowości 1 oraz super-ujście $t$, do którego wchodzą krawędzie o przepustowości 1 ze wszystkich węzłów z prawego zbioru.", isCorrect: true },
            { text: "Każdej istniejącej krawędzi przypisać wagę ujemną i uruchomić algorytm Bellmana-Forda.", isCorrect: false },
            { text: "Dodać pętle zwrotne o wadze $\\infty$ dla każdego węzła.", isCorrect: false },
            { text: "Ustawić wszystkim krawędziom w grafie wagę proporcjonalną do ich stopnia wychodzącego.", isCorrect: false }
        ]
    },
    {
        id: 180,
        category: "Grafy: Przeszukiwanie (DFS)",
        text: "Krawędzie \"w przód\" (forward edges) w lesie przeszukiwania w głąb (DFS) to:",
        options: [
            { text: "Krawędzie niedrzewowe $(u,v)$ łączące wierzchołek $u$ z jego potomkiem $v$ w drzewie DFS.", isCorrect: true },
            { text: "Krawędzie łączące $u$ z węzłem w innej, już odwiedzonej składowej.", isCorrect: false },
            { text: "Krawędzie tworzące cykle w grafie (łączące z przodkiem).", isCorrect: false },
            { text: "Krawędzie wybierane zachłannie na podstawie najniższej wagi.", isCorrect: false }
        ]
    },
    {
        id: 181,
        category: "Struktury Danych: Tablice Haszujące",
        text: "Na czym polega zjawisko \"pierwotnego grupowania\" (primary clustering), występujące przy rozwiązywaniu kolizji w tablicach haszujących?",
        options: [
            { text: "Długie ciągi zajętych miejsc w tablicy stają się coraz dłuższe, ponieważ każdy wolny slot w sąsiedztwie takiego ciągu ma większe prawdopodobieństwo na zostane zapełnionym.", isCorrect: true },
            { text: "Dane są grupowane wewnątrz list wiązanych, które wydłużają się w nieskończoność powodując czas wyszukiwania $O(n)$.", isCorrect: false },
            { text: "Pojawia się gdy funkcja haszująca ignoruje wartości dodatnie, przypisując wszystko do jednej grupy.", isCorrect: false },
            { text: "Zjawisko wywołane jest w momencie wykorzystywania dwóch oddzielnych funkcji haszujących (double hashing).", isCorrect: false }
        ]
    },
    {
        id: 182,
        category: "Struktury Danych: Tablice Haszujące",
        text: "Przy haszowaniu otwartym (open addressing), jaką wartość należy wpisać w miejscu po usuniętym elemencie, aby procedura `HASH-SEARCH` mogła nadal działać poprawnie?",
        options: [
            { text: "Specjalną wartość `DELETED` (zamiast `NIL`), aby pętla szukająca nie zatrzymała się przedwcześnie w trakcie kolizji.", isCorrect: true },
            { text: "Należy przywrócić domyślną wartość `NIL`, aby slot był wolny.", isCorrect: false },
            { text: "Usunąć element przez przetasowanie (skrócenie) tablicy o 1.", isCorrect: false },
            { text: "Wartość `-1`, chyba że w tablicy były klucze ujemne, wtedy `0`.", isCorrect: false }
        ]
    },
    {
        id: 183,
        category: "Grafy: Najkrótsze Ścieżki na DAG",
        text: "Jaki jest pierwszy krok przy poszukiwaniu najkrótszych ścieżek z jednego źródła w Skierowanym Grafie Acyklicznym (DAG), zanim zaczniemy dokonywać relaksacji?",
        options: [
            { text: "Należy posortować topologicznie wierzchołki grafu.", isCorrect: true },
            { text: "Należy wybudować na nich strukturę Kopca Fibonacciego.", isCorrect: false },
            { text: "Należy zamienić wszystkie ewentualne ujemne wagi na ich bezwzględną wartość.", isCorrect: false },
            { text: "Uruchomić algorytm BFS w celu zbadania acykliczności.", isCorrect: false }
        ]
    },
    {
        id: 184,
        category: "Dowody Algorytmów: Niezmiennik",
        text: "Czym jest niezmiennik pętli (loop invariant) w analizie poprawności algorytmów na podstawie podręcznika Cormena?",
        options: [
            { text: "Jest to warunek, który musi być spełniony: 1) przed pierwszym wejściem w pętlę, 2) po każdej iteracji przed rozpoczęciem kolejnej oraz 3) w momencie zakończenia pętli wykazując poprawność algorytmu.", isCorrect: true },
            { text: "Jest to zjawisko, w którym złożoność pętli nie ulega zmianie bez względu na dane wejściowe.", isCorrect: false },
            { text: "Jest to zmienna typu stałego (const) wykorzystywana do warunku przerwania `break`.", isCorrect: false },
            { text: "Jest to dowód matematyczny udowadniający, że pętla zawsze się zakończy.", isCorrect: false }
        ]
    },
    {
        id: 185,
        category: "Dynamiczne Struktury Danych",
        text: "Do czego służą struktury Zbiorów Rozłącznych (Disjoint Sets) reprezentowane jako lasy (Disjoint-set forests)?",
        options: [
            { text: "Są wykorzystywane w algorytmie Kruskala do szybkiego łączenia drzew MST i sprawdzania w zaledwie zammortyzowanym czasie $O(\\alpha(V))$, czy nie powstanie cykl.", isCorrect: true },
            { text: "Do reprezentacji wierzchołków o tej samej wadze krawędzi w strukturach Dijkstry.", isCorrect: false },
            { text: "Do znajdowania przekrojów minimalnych w algorytmie Forda-Fulkersona.", isCorrect: false },
            { text: "Do tworzenia szyfrowanych zbiorów dla zapytań o najkrótsze ścieżki algorytmu Floyda-Warshalla.", isCorrect: false }
        ]
    },
    {
        id: 186,
        category: "Grafy: Sieci Przepływowe",
        text: "Czym charakteryzuje się Przekrój (Cut) sieci przepływowej $(S, T)$ z punktu widzenia problemu max-flow?",
        options: [
            { text: "Rozdziela wierzchołki na dwa zbiory tak, by źródło leżało w $S$, a ujście w $T$. Pojemność (przepustowość) przekroju to suma wag krawędzi wychodzących z $S$ i wchodzących do $T$.", isCorrect: true },
            { text: "Polega na usunięciu węzłów wewnętrznych tak, by maksymalny cykl wynosił dokładnie przepływ krytyczny sieci.", isCorrect: false },
            { text: "Zwraca macierz przepustowości rezydualnej, z której wycina wszystkie węzły o stopniu wchodzącym mniejszym niż 2.", isCorrect: false },
            { text: "To usunięty najdroższy element struktury z minimalnego drzewa rozpinającego.", isCorrect: false }
        ]
    },
    {
        id: 187,
        category: "Struktury Danych: BST i AVL",
        text: "Podczas usuwania węzła $z$ z drzewa poszukiwań binarnych, gdy ten posiada dwoje dzieci, algorytm wykorzystuje element $y$. Czym on jest?",
        options: [
            { text: "Zazwyczaj jest to następnik $z$ w porządku inorder (węzeł o minimalnym kluczu w prawym poddrzewie z), który nie posiada już lewego dziecka.", isCorrect: true },
            { text: "Jest to rodzic elementu $z$, który staje się jego spadkobiercą.", isCorrect: false },
            { text: "To największy element w całym drzewie BST.", isCorrect: false },
            { text: "Jest wskaźnikiem na węzeł pomocniczy NIL wykorzystywany do zabezpieczeń.", isCorrect: false }
        ]
    },
    {
        id: 188,
        category: "Dowodzenie Matematyczne: Indukcja",
        text: "W metodzie dowodzenia poprawności algorytmów rekurencyjnych przez indukcję matematyczną, jaki jest pierwszy niezbędny krok po sformułowaniu tezy $T(n)$?",
        options: [
            { text: "Rozwiązanie przypadku bazowego (warunku początkowego), np. udowodnienie że teza jest prawdziwa dla najmniejszej możliwej bazy jak $T(1)$.", isCorrect: true },
            { text: "Ułożenie równania z twierdzenia o rekurencji uniwersalnej (Master Theorem).", isCorrect: false },
            { text: "Wykonanie kroków relaksacji celem znalezienia niezmiennika pętli rekurencyjnej.", isCorrect: false },
            { text: "Oszacowanie złożoności pamięciowej dla stosu wywołań przed rozbiciem na podproblemy.", isCorrect: false }
        ]
    },
    {
        id: 189,
        category: "Algorytmy Geometryczne",
        text: "Jakie jest najczęstsze zastosowanie obliczania wyznacznika (iloczynu wektorowego) dwóch wektorów $\\vec{P_1P_2}$ i $\\vec{P_1P_3}$ w 2D?",
        options: [
            { text: "Sprawdzanie orientacji punktów (np. czy $P_3$ leży po lewej czy prawej stronie wektora kierunkowego z $P_1$ do $P_2$).", isCorrect: true },
            { text: "Do wyznaczania najmniejszego drzewa rozpinającego tych punktów (MST) na płaszczyźnie.", isCorrect: false },
            { text: "Do symulowania operacji przesunięć okna w algorytmach wyszukiwania wzorca.", isCorrect: false },
            { text: "Wyznacznik jest używany w celu znalezienia sumy rzutów wektorów co odpowiada wielkości bazy otoczki.", isCorrect: false }
        ]
    },
    {
        id: 190,
        category: "Algorytmy Sortowania: Model Drzewa Decyzyjnego",
        text: "Dlaczego drzewo decyzyjne dla sortowania przez porównania opartego o $n$ elementów musi mieć co najmniej $n!$ liści?",
        options: [
            { text: "Ponieważ istnieje $n!$ permutacji elementów wejściowych, a poprawnie działający algorytm musi potrafić wygenerować z nich każdą, odgadując z wejścia ich prawidłową (unikalną) sekwencję.", isCorrect: true },
            { text: "Ponieważ podczas każdego z $n$ poziomów algorytmu tworzonych jest $!$ (silnia) nowych rozgałęzień (podzbiorów w Quicksort).", isCorrect: false },
            { text: "Wynika to ze wzoru na maksymalną entropię Shannona i kompresję algorytmiczną stosu wywołań w drzewie AVL.", isCorrect: false },
            { text: "Jest to założenie wynikające z faktu, że algorytm musi w optymistycznym czasie porównać każdy element z elementem obok.", isCorrect: false }
        ]
    },

    {
        id: 191,
        category: "1. Analiza Algorytmów: Rekurencja",
        text: "Zgodnie z Twierdzeniem o Rekurencji Uniwersalnej (Master Theorem), co zachodzi w Przypadku 2, gdy funkcja $f(n) = \\Theta(n^{\\log_b a})$?",
        options: [
            { text: "Złożoność wynosi $T(n) = \\Theta(n^{\\log_b a} \\log n)$.", isCorrect: true },
            { text: "Algorytm ma złożoność wielomianową dominuącą nad podziałem: $T(n) = \\Theta(f(n))$.", isCorrect: false },
            { text: "Koszty na każdym poziomie drzewa rekursji rosną geometrycznie.", isCorrect: false },
            { text: "Równanie jest nierozwiązywalne tą metodą z powodu naruszenia warunku regularności.", isCorrect: false }
        ]
    },
    {
        id: 192,
        category: "1. Analiza Algorytmów: Koszt Zamortyzowany",
        text: "W analizie kosztu zamortyzowanego (metoda księgowania) dla inkrementacji $k$-bitowego licznika binarnego, ile wynosi standardowy koszt zamortyzowany pojedynczej operacji dodania 1?",
        options: [
            { text: "$O(1)$, ponieważ za każdą zmianę bitu z 0 na 1 płacimy z góry za jego późniejszą zmianę z 1 na 0.", isCorrect: true },
            { text: "$O(k)$, ponieważ pesymistycznie zmieniamy wszystkie bity (przykład przejścia z $0111$ na $1000$).", isCorrect: false },
            { text: "$O(\\log k)$, ze względu na binarne przeniesienie (carry).", isCorrect: false },
            { text: "$O(2^k)$, co odpowiada zliczeniu do końca zakresu.", isCorrect: false }
        ]
    },
    {
        id: 193,
        category: "2. Algorytmy Sortowania: Merge Sort",
        text: "W której dokładnie linii pseudokodu procedury `Merge` (scalania) zagwarantowana jest stabilność sortowania przez scalanie?",
        options: [
            { text: "W warunku `if (L[i] <= R[j])` – wybór elementu z lewej tablicy w przypadku remisu zapewnia stabilność.", isCorrect: true },
            { text: "Podczas obliczania punktu podziału `mid = floor((left + right) / 2)`.", isCorrect: false },
            { text: "W pętlach sprzątających (`for i = idL to mid ...`).", isCorrect: false },
            { text: "Merge Sort z definicji nie jest stabilny.", isCorrect: false }
        ]
    },
    {
        id: 194,
        category: "2. Algorytmy Sortowania: Quicksort",
        text: "Dlaczego zrandomizowany Quicksort (z losowym wyborem pivota) chroni przed złośliwymi danymi wejściowymi?",
        options: [
            { text: "Ponieważ wymusza, by oczekiwany (średni) czas wykonania wynosił $O(n \\log n)$ niezależnie od początkowego układu danych.", isCorrect: true },
            { text: "Ponieważ obniża pesymistyczny czas działania do bezwzględnego $O(n \\log n)$.", isCorrect: false },
            { text: "Dzięki losowaniu, procedura `Partition` ignoruje powtarzające się elementy.", isCorrect: false },
            { text: "Losowanie gwarantuje idealny podział tablicy na połowy w każdym kroku rekursji.", isCorrect: false }
        ]
    },
    {
        id: 195,
        category: "3. Struktury Danych: Kopce",
        text: "W tablicowej reprezentacji kopca binarnego indeksowanego od $1$, w jaki sposób ustala się pozycje potomków oraz rodzica węzła $i$?",
        options: [
            { text: "Lewe dziecko: $2i$, Prawe dziecko: $2i + 1$, Rodzic: $\\lfloor i/2 \\rfloor$.", isCorrect: true },
            { text: "Lewe dziecko: $2i + 1$, Prawe dziecko: $2i + 2$, Rodzic: $\\lfloor (i-1)/2 \\rfloor$.", isCorrect: false },
            { text: "Lewe dziecko: $i+1$, Prawe dziecko: $i+2$, Rodzic: $i-1$.", isCorrect: false },
            { text: "Nie da się tego ustalić operacjami arytmetycznymi, wymagane są wskaźniki `left` i `right`.", isCorrect: false }
        ]
    },
    {
        id: 196,
        category: "3. Struktury Danych: Kopce",
        text: "Co charakteryzuje procedurę `Build-Max-Heap(A)`?",
        options: [
            { text: "Działa w czasie $O(n)$, pomimo że używa w pętli procedury `Heapify` o koszcie $O(\\log n)$.", isCorrect: true },
            { text: "Iteruje po elementach tablicy w kolejności od $1$ do $\\lfloor n/2 \\rfloor$.", isCorrect: false },
            { text: "Jej złożoność w najgorszym przypadku to ściśle $O(n \\log n)$.", isCorrect: false },
            { text: "Buduje kopiec wykonując procedurę `Heap-Insert` $n$ razy.", isCorrect: false }
        ]
    },
    {
        id: 197,
        category: "4. Struktury Danych: Drzewa BST",
        text: "Zgodnie z procedurą `Tree-Delete(T, z)`, co robi algorytm, gdy węzeł $z$ do usunięcia ma dwoje dzieci?",
        options: [
            { text: "Zastępuje węzeł $z$ jego następnikiem $y$ (który na pewno nie ma lewego dziecka), po czym wycina $y$ z jego pierwotnej pozycji.", isCorrect: true },
            { text: "Zastępuje węzeł $z$ prawym dzieckiem i podpina lewe dziecko pod skrajnie lewy węzeł prawego poddrzewa.", isCorrect: false },
            { text: "Przenosi $z$ do liścia poprzez rotacje i wtedy go usuwa.", isCorrect: false },
            { text: "Zamienia klucz węzła $z$ z kluczem w korzeniu i usuwa korzeń.", isCorrect: false }
        ]
    },
    {
        id: 198,
        category: "4. Struktury Danych: Drzewa AVL i RB",
        text: "Ile maksymalnie rotacji (nie licząc zmiany kolorów) może wymagać procedura wstawiania elementu do drzewa Czerwono-Czarnego w celu przywrócenia jego właściwości?",
        options: [
            { text: "Co najwyżej 2 rotacji.", isCorrect: true },
            { text: "$O(\\log n)$ rotacji.", isCorrect: false },
            { text: "1 rotacji.", isCorrect: false },
            { text: "Zależy to liniowo od liczby czarnych węzłów.", isCorrect: false }
        ]
    },
    {
        id: 199,
        category: "4. Struktury Danych: Tablice Haszujące",
        text: "Jakie jest główne ograniczenie i problem metody adresowania liniowego (linear probing) w tablicach haszujących?",
        options: [
            { text: "Grupowanie pierwotne (primary clustering) – tworzenie się długich ciągów zajętych komórek, co wydłuża średni czas poszukiwania.", isCorrect: true },
            { text: "Konieczność alokacji zewnętrznych list dowiązaniowych.", isCorrect: false },
            { text: "Brak możliwości poprawnego usunięcia elementu z tablicy.", isCorrect: false },
            { text: "Koszty związane z wyliczaniem wielu funkcji haszujących w każdym kroku.", isCorrect: false }
        ]
    },
    {
        id: 200,
        category: "5. Algorytmy Grafowe: BFS i DFS",
        text: "Na czym polega klasyfikacja krawędzi poprzecznych (cross edges) w algorytmie DFS?",
        options: [
            { text: "Są to krawędzie łączące wierzchołki bez relacji przodek-potomek, mogą łączyć wierzchołki w tym samym drzewie DFS lub między różnymi drzewami w lesie DFS.", isCorrect: true },
            { text: "Są to krawędzie prowadzące do przodka (wskazują cykl).", isCorrect: false },
            { text: "Są to krawędzie wyeliminowane podczas budowania drzewa rozpinającego.", isCorrect: false },
            { text: "Są to jedyne krawędzie, które DFS przetwarza przy budowie kolejki dla BFS.", isCorrect: false }
        ]
    },
    {
        id: 201,
        category: "5. Algorytmy Grafowe: Topologiczne Sortowanie",
        text: "Jaki jest główny warunek strukturalny, aby graf mógł zostać posortowany topologicznie?",
        options: [
            { text: "Musi być Skierowanym Grafem Acyklicznym (DAG – Directed Acyclic Graph).", isCorrect: true },
            { text: "Musi być spójny lub silnie spójny.", isCorrect: false },
            { text: "Nie może zawierać wag ujemnych ani ujemnych cykli.", isCorrect: false },
            { text: "Musi być drzewem poszukiwań binarnych.", isCorrect: false }
        ]
    },
    {
        id: 202,
        category: "6. Algorytmy Grafowe: Najkrótsze Ścieżki",
        text: "W algorytmie Bellmana-Forda wierzchołki są początkowo inicjalizowane wartościami $d[v] = \\infty$. Ile dokładnie iteracji głównej pętli relaksacji wykonuje ten algorytm (przed sprawdzeniem ujemnych cykli)?",
        options: [
            { text: "Dokładnie $|V| - 1$ iteracji relaksacji każdej krawędzi ze zbioru $E$.", isCorrect: true },
            { text: "Dokładnie $|E|$ iteracji.", isCorrect: false },
            { text: "Iteruje dopóki istnieją krawędzie zmniejszające wagi (pętla while).", isCorrect: false },
            { text: "Dokładnie $|V|$ iteracji, z czego ostatnia zamyka ujemne ścieżki.", isCorrect: false }
        ]
    },
    {
        id: 203,
        category: "6. Algorytmy Grafowe: Najkrótsze Ścieżki",
        text: "Która z poniższych właściwości dotyczy algorytmu Floyda-Warshalla?",
        options: [
            { text: "Rozwiązuje problem najkrótszych ścieżek między wszystkimi parami wierzchołków w czasie $O(V^3)$.", isCorrect: true },
            { text: "Wymaga grafu bez ujemnych wag krawędzi.", isCorrect: false },
            { text: "Opiera się na zachłannym poszukiwaniu za pomocą struktury Zbiorów Rozłącznych (Union-Find).", isCorrect: false },
            { text: "Wykorzystuje heurystykę i metodę A* do szybszego znalezienia celu.", isCorrect: false }
        ]
    },
    {
        id: 204,
        category: "7. Algorytmy Grafowe: Minimalne Drzewo Rozpinające",
        text: "Jakie jest kluczowe założenie tzw. cięcia w kontekście Minimalnego Drzewa Rozpinającego (MST)?",
        options: [
            { text: "Jeśli krawędź $(u,v)$ należy do przekroju i ma minimalną wagę spośród krawędzi przecinających ten przekrój, to krawędź ta bezpiecznie należy do pewnego MST.", isCorrect: true },
            { text: "Przekrój MST odcina graf na dwie równe (pod względem wierzchołków) połowy.", isCorrect: false },
            { text: "Każdy przekrój dodaje dokładnie $V-1$ nowych krawędzi do kopca binarnego.", isCorrect: false },
            { text: "Waga najlżejszej krawędzi z przekroju stanowi dolne ograniczenie w algorytmie Bellmana-Forda.", isCorrect: false }
        ]
    },
    {
        id: 205,
        category: "7. Algorytmy Grafowe: Minimalne Drzewo Rozpinające",
        text: "Z jaką złożonością czasową operuje algorytm Kruskala z optymalnie zaimplementowaną strukturą zbiorów rozłącznych?",
        options: [
            { text: "$O(E \\log V)$ (zdominowane przez czas sortowania krawędzi).", isCorrect: true },
            { text: "$O(V^2)$ niezależnie od struktury grafu.", isCorrect: false },
            { text: "$O(V + E)$ dzięki liniowemu czasowi algorytmu Union-Find.", isCorrect: false },
            { text: "$O(E + V \\log V)$ co odpowiada osiągom kopca Fibonacciego.", isCorrect: false }
        ]
    },
    {
        id: 206,
        category: "8. Sieci Przepływowe",
        text: "W algorytmie Forda-Fulkersona wprowadzono pojęcie sieci residualnej. Co oznacza pojemność residualna $c_f(u, v)$ krawędzi w przód (zgodnej z grafem pierwotnym)?",
        options: [
            { text: "$c_f(u, v) = c(u, v) - f(u, v)$, czyli o ile jeszcze możemy zwiększyć przepływ.", isCorrect: true },
            { text: "$c_f(u, v) = f(v, u)$, czyli przepływ zwrotny.", isCorrect: false },
            { text: "$c_f(u, v) = c(u, v) + f(u, v)$.", isCorrect: false },
            { text: "Oznacza ostateczną wagę skojarzenia na danej ścieżce po relaksacji.", isCorrect: false }
        ]
    },
    {
        id: 207,
        category: "8. Sieci Przepływowe",
        text: "W jaki sposób rozwiązuje się problem maksymalnego skojarzenia w grafach dwudzielnych (Bipartite Matching)?",
        options: [
            { text: "Sprowadza się go do problemu sieci przepływowej poprzez dodanie super-źródła oraz super-ujścia i ustawieniu pojemności wszystkich krawędzi na 1.", isCorrect: true },
            { text: "Używając algorytmu Dijkstry na krawędziach międzyskładowych.", isCorrect: false },
            { text: "Wykonując przeszukiwanie DFS i zliczając krawędzie poprzeczne.", isCorrect: false },
            { text: "Przy pomocy dynamicznych statystyk pozycyjnych i rang.", isCorrect: false }
        ]
    },
    {
        id: 208,
        category: "9. Wyszukiwanie Wzorca: Automaty Stanowe",
        text: "Na czym opiera się algorytm wyszukiwania wzorca za pomocą automatów skończenie stanowych (FSA)?",
        options: [
            { text: "Na konstrukcji tablicy przejść, gdzie stan zależy od najdłuższego prefiksu wzorca będącego jednocześnie sufiksem przeczytanego do tej pory tekstu.", isCorrect: true },
            { text: "Na budowie drzewa Trie i przeszukiwaniu go wstecz.", isCorrect: false },
            { text: "Na obliczeniu wyznacznika (hashu) okna i redukcji przez liczbę pierwszą.", isCorrect: false },
            { text: "Na iteracyjnym pomijaniu liter o kodach ASCII mniejszych niż dany wzorzec.", isCorrect: false }
        ]
    },
    {
        id: 209,
        category: "9. Wyszukiwanie Wzorca: Boyer-Moore",
        text: "Na czym polega heurystyka \"złego znaku\" w algorytmie Boyera-Moore'a?",
        options: [
            { text: "Gdy znak w tekście nie pasuje do wzorca, przesuwamy wzorzec tak, by to niedopasowane miejsce wyrównało się z ostatnim wystąpieniem tego znaku we wzorcu (lub poza niego).", isCorrect: true },
            { text: "Przesuwamy wzorzec w przód o cały blok na podstawie tablicy prefikso-sufiksów.", isCorrect: false },
            { text: "Polega na modyfikacji samego tekstu w locie w celu podniesienia zgodności znaków.", isCorrect: false },
            { text: "Zamienia znak niezgodny na specjalny wartownik `NIL`.", isCorrect: false }
        ]
    },
    {
        id: 210,
        category: "10. Kompresja Tekstów: LZW",
        text: "W jaki sposób odbywa się inicjalizacja słownika w algorytmie kompresji LZW?",
        options: [
            { text: "Słownik inicjalizowany jest jednoliterowymi symbolami obejmującymi cały wykorzystywany alfabet wejściowy.", isCorrect: true },
            { text: "Słownik na początku jest całkowicie pusty i zapełnia się tylko pełnymi wyrazami.", isCorrect: false },
            { text: "Słownik inicjalizuje się odczytanym z pliku drzewem (zakodowanym w nagłówku).", isCorrect: false },
            { text: "Słownik wypełnia się stałym wektorem przedrostków, np. ASCII od zera do 65535.", isCorrect: false }
        ]
    },
    {
        id: 211,
        category: "10. Kompresja Tekstów: Teoria",
        text: "Zgodnie z Teorią Informacji, co wyznacza miara entropii Shannona w kontekście tekstu?",
        options: [
            { text: "Teoretyczną dolną granicę średniej liczby bitów niezbędnych do zakodowania jednego znaku tekstu.", isCorrect: true },
            { text: "Ilość miejsca zmarnowanego przez nieoptymalne działanie drzewa Huffmana.", isCorrect: false },
            { text: "Współczynnik kompresji stosowany przy zapisie obrazów rastrowych.", isCorrect: false },
            { text: "Liczbę węzłów w optymalnym drzewie zbalansowanym.", isCorrect: false }
        ]
    },
    {
        id: 212,
        category: "11. Algorytmy Geometryczne",
        text: "Jak matematycznie najefektywniej rozstrzygnąć problem czy dwa odcinki $P_1P_2$ oraz $P_3P_4$ przecinają się wzajemnie?",
        options: [
            { text: "Sprawdzając, czy punkty $P_1$ i $P_2$ leżą po przeciwnych stronach prostej przechodzącej przez $P_3$ i $P_4$ (i na odwrót), z wykorzystaniem iloczynów wektorowych (wyznaczników).", isCorrect: true },
            { text: "Obliczając ich kąty biegunowe względem osi OX i zrównując moduły.", isCorrect: false },
            { text: "Korzystając z miary euklidesowej względem środka ciężkości całego układu.", isCorrect: false },
            { text: "Rysując równania parametryczne prostych i szukając pierwiastków całkowitych.", isCorrect: false }
        ]
    },
    {
        id: 213,
        category: "11. Algorytmy Geometryczne",
        text: "Jakie jest główne zastosowanie algorytmu zamiatania (Sweep Line Algorithm) w kontekście geometrii obliczeniowej?",
        options: [
            { text: "Efektywne poszukiwanie przecięć w zbiorze $n$ odcinków (złożoność rzędu $O(n \\log n)$) w zastępstwie naiwnego sprawdzania każdej pary $O(n^2)$.", isCorrect: true },
            { text: "Wyznaczanie otoczki wypukłej poprzez miotłę kątową względem punktu startowego.", isCorrect: false },
            { text: "Generowanie najkrótszych dróg w algorytmach robotyki na planie wielokątów.", isCorrect: false },
            { text: "Kompresja figur geometrycznych przez redukcję gęstych punktów.", isCorrect: false }
        ]
    },
    {
        id: 214,
        category: "12. Algorytmy Równoległe (PRAM)",
        text: "W modelu PRAM, co definiuje klasę architektury CRCW?",
        options: [
            { text: "Concurrent Read, Concurrent Write – dozwolony jest równoczesny odczyt oraz równoczesny zapis wielu procesorów do tej samej komórki pamięci, ale zapis wymaga reguły rozwiązywania konfliktów (np. PRIORITY, COMMON).", isCorrect: true },
            { text: "Constant Read, Constant Write – ograniczenie systemu na jedną operację odczytu i zapisu na cykl zegara.", isCorrect: false },
            { text: "Cross Referenced Cache Write – specyficzna synchronizacja przez pamięć podręczną na szynie.", isCorrect: false },
            { text: "Concurrent Read, Centralized Write – dozwolony równoczesny odczyt, ale zapis realizowany asynchronicznie przez jeden węzeł Master.", isCorrect: false }
        ]
    },
    {
        id: 215,
        category: "12. Algorytmy Równoległe",
        text: "W jaki sposób w systemach równoległych optymalizuje się wyznaczenie sumy prefiksowej w tablicy?",
        options: [
            { text: "Używając techniki zrównoważonego drzewa binarnego (redukcja i skan w dół), uzyskując z sumaryczny czas $O(\\log n)$ przy pomocy wielu procesorów.", isCorrect: true },
            { text: "Zrównolegleniem sortowania algorytmem Hoare'a na wielu rdzeniach.", isCorrect: false },
            { text: "Wykorzystując sekwencyjny algorytm Hornera przesunięty do modułów SIMD.", isCorrect: false },
            { text: "Suma prefiksowa jest problemem ściśle sekwencyjnym i nie da się jej efektywnie zrównoleglić.", isCorrect: false }
        ]
    },
    {
        id: 216,
        category: "2. Algorytmy Sortowania: Counting Sort",
        text: "Gdzie w algorytmie Counting Sort występuje ograniczenie wymagające by dane wejściowe $A[j]$ miały typ całkowitoliczbowy (lub dały się na niego zmapować)?",
        options: [
            { text: "Ponieważ wartości wejściowe $A[j]$ stanowią indeksy wywoływane przy podnoszeniu liczników tablicy pomocniczej $C[A[j]] = C[A[j]] + 1$.", isCorrect: true },
            { text: "Z uwagi na procedurę Merge wymuszającą użycie stosu liczb naturalnych.", isCorrect: false },
            { text: "Tylko liczby całkowite można stabilnie przenieść używając zmiennoprzecinkowego rzutowania w bloku PRAM.", isCorrect: false },
            { text: "Opiera się to na założeniu architektury systemu Flynna odnośnie zagnieżdżeń MISD.", isCorrect: false }
        ]
    },
    {
        id: 217,
        category: "3. Struktury Danych: Analiza",
        text: "Gdy wstawiamy sekwencję rosnących liczb do pustego, klasycznego drzewa BST (nie AVL ani RB), jak będzie wyglądała jego struktura i jaka będzie pesymistyczna złożoność wyszukiwania?",
        options: [
            { text: "Struktura zdegeneruje się do listy jednokierunkowej, a wyszukiwanie będzie trwało $O(n)$.", isCorrect: true },
            { text: "Drzewo zbalansuje się optymalnie (tworząc kopiec), zachowując złożoność $O(\\log n)$.", isCorrect: false },
            { text: "Zostanie podzielone na dwa symetryczne patyki, co obniży złożoność wyszukiwania o połowę.", isCorrect: false },
            { text: "Procedura zakończy się błędem przepełnienia głębokości (overflow error).", isCorrect: false }
        ]
    },
    {
        id: 218,
        category: "7. Algorytmy Grafowe: Kruskal vs Prim",
        text: "Czym strukturalnie i procesowo różni się budowanie MST w algorytmie Prima od budowy w algorytmie Kruskala?",
        options: [
            { text: "Prim cały czas utrzymuje jedno, spójne, rosnące drzewo, a Kruskal utrzymuje las wielu rozłącznych drzew, które powoli się scalają.", isCorrect: true },
            { text: "Prim operuje na wierzchołkach omijając wagi krawędzi, a Kruskal analizuje odległości od źródła.", isCorrect: false },
            { text: "Prim stosowany jest tylko na grafach skierowanych z cyklami, a Kruskal wyłącznie w DAG-ach.", isCorrect: false },
            { text: "Nie ma żadnej widocznej różnicy, to dwa warianty tego samego mechanizmu opartego o tablicę prefiksów.", isCorrect: false }
        ]
    },
    {
        id: 219,
        category: "1. Analiza Algorytmów: Rekurencja",
        text: "Czego w kontekście algorytmów 'Dziel i Zwyciężaj' dotyczy symbol 'c' w uogólnionym koszcie $C(n)$ rekurencji?",
        options: [
            { text: "Kosztu połączenia rozwiązań mniejszych podproblemów, aby otrzymać wynik dla problemu o oryginalnym rozmiarze.", isCorrect: true },
            { text: "Rozmiaru granicznego, poniżej którego włącza się podział heurystyczny.", isCorrect: false },
            { text: "Kosztu posortowania początkowej tablicy podanej jako argument do wywołania DFS.", isCorrect: false },
            { text: "Zdolności pamięci operacyjnej na alokację nowych wektorów buforowych.", isCorrect: false }
        ]
    },
    {
        id: 220,
        category: "5. Algorytmy Grafowe: Sortowanie Topologiczne",
        text: "Sortowanie topologiczne to w praktyce:",
        options: [
            { text: "Wywołanie algorytmu DFS i odkładanie wierzchołków w kolejności ich 'zakończenia' na początek pomocniczej listy (odwrotność czasu wyjścia f).", isCorrect: true },
            { text: "Sortowanie grafu algorytmem Heapsort względem stopnia wchodzącego do każdego węzła.", isCorrect: false },
            { text: "Zamiana grafu nieważonego na model MST w celu ustalenia cyklu krytycznego.", isCorrect: false },
            { text: "Poszukiwanie ścieżki Hamiltona relaksując tylko krawędzie poprzeczne.", isCorrect: false }
        ]
    },

    {
        id: 221,
        category: "Wprowadzenie: Dowód Algorytmu",
        text: "W rozumowaniu indukcyjnym (dowodzie indukcyjnym) poprawności niezmiennika pętli, czemu odpowiada 'krok indukcyjny' (inductive step)?",
        options: [
            { text: "Wyraża się poprzez pokazanie, że jeśli niezmiennik jest prawdziwy przed iteracją pętli, to pozostaje prawdziwy również przed następną iteracją.", isCorrect: true },
            { text: "Polega na udowodnieniu poprawności bazy, tj. faktu, że algorytm w ogóle wchodzi w główną pętlę.", isCorrect: false },
            { text: "To faza zakończenia, w której udowadniamy, że po wyjściu z pętli algorytm zwraca optymalny wynik.", isCorrect: false },
            { text: "Jest to matematyczne udowodnienie, że złożoność pętli wynosi $O(n)$ dla dowolnego $n$.", isCorrect: false }
        ]
    },
    {
        id: 222,
        category: "Algorytmy Sortowania: Radix Sort",
        text: "Jaka jest dokładna złożoność czasowa algorytmu Radix Sort dla $n$ słów/liczb o długości $d$ cyfr, jeśli do stabilnego sortowania użyjemy sortowania przez zliczanie z zakresem wartości $0..k$ dla każdej cyfry?",
        options: [
            { text: "$\\Theta(d(n + k))$", isCorrect: true },
            { text: "$\\Theta(n \\cdot d^k)$", isCorrect: false },
            { text: "$O(n \\log_k d)$", isCorrect: false },
            { text: "$\\Theta(n + d \\cdot k)$", isCorrect: false }
        ]
    },
    {
        id: 223,
        category: "Algorytmy Sortowania: Bucket Sort",
        text: "Zgodnie z procedurą `Bucket-Sort(A)` dla danych wpadających w rozkład jednostajny na przedziale $[0, 1)$, co robi operacja przyporządkowania elementu do kubełka dla tablicy o rozmiarze $n$?",
        options: [
            { text: "Wstawia element $A[i]$ do listy dowiązaniowej znajdującej się pod indeksem $B[\\lfloor n \\cdot A[i] \\rfloor]$.", isCorrect: true },
            { text: "Dzieli wartość $A[i]$ przez $n$ i wyciąga z tego sufit (CEILING).", isCorrect: false },
            { text: "Wykonuje operację $A[i] \\bmod n$ i mapuje do lokalnej tablicy haszującej.", isCorrect: false },
            { text: "Wykorzystuje strukturę Union-Find do pogrupowania kubełków w bloki wielkości $k$.", isCorrect: false }
        ]
    },
    {
        id: 224,
        category: "Struktury Danych: Tablice Haszujące",
        text: "Jak zdefiniowany jest ciąg próbkowania dla haszowania dwukrotnego (double hashing) przy adresowaniu otwartym?",
        options: [
            { text: "$h(k, i) = (h_1(k) + i \\cdot h_2(k)) \\bmod m$", isCorrect: true },
            { text: "$h(k, i) = (h_1(k) + c_1 \\cdot i + c_2 \\cdot i^2) \\bmod m$", isCorrect: false },
            { text: "$h(k, i) = (h_1(k) \\cdot h_2(i)) \\bmod m$", isCorrect: false },
            { text: "$h(k, i) = (h_1(k) + i) \\bmod m$", isCorrect: false }
        ]
    },
    {
        id: 225,
        category: "Struktury Danych: Tablice Haszujące",
        text: "W haszowaniu dwukrotnym wartość funkcji pomocniczej $h_2(k)$ musi spełniać pewien matematyczny warunek względem wielkości tablicy $m$. Jaki?",
        options: [
            { text: "Wartość $h_2(k)$ i rozmiar tablicy $m$ muszą być względnie pierwsze (ich największy wspólny dzielnik NWD wynosi 1), aby próbkowanie przeszło przez całą tablicę.", isCorrect: true },
            { text: "Rozmiar tablicy $m$ musi być zawsze podzielny przez $h_2(k)$, by zjawisko primary clusteringu zostało wyeliminowane.", isCorrect: false },
            { text: "Wartość $h_2(k)$ musi wynosić dokładnie $\\log m$.", isCorrect: false },
            { text: "NWD($h_2(k)$, $m$) musi być parzyste, jeśli $m$ jest potęgą dwójki.", isCorrect: false }
        ]
    },
    {
        id: 226,
        category: "Dynamiczne Statystyki Pozycyjne (OS-Tree)",
        text: "Podczas wykonywania rotacji w lewo (Left-Rotate) na węźle $x$, którego prawym dzieckiem jest $y$, w jaki sposób aktualizowane jest pole `size` (rozmiar poddrzewa) utrzymywane przez OS-Tree?",
        options: [
            { text: "`y.size = x.size` oraz `x.size = x.left.size + x.right.size + 1`", isCorrect: true },
            { text: "`x.size = y.size` oraz `y.size = y.left.size + y.right.size + 1`", isCorrect: false },
            { text: "`x.size = y.size - 1`", isCorrect: false },
            { text: "Pole `size` inkrementowane jest o 1 tylko w korzeniu głównym drzewa.", isCorrect: false }
        ]
    },
    {
        id: 227,
        category: "Struktury Danych: Drzewa Przedziałowe",
        text: "W operacji `Interval-Search(T, i)` w drzewie przedziałowym (Interval Tree), jaki jest warunek gwarantujący poprawność decyzji o zejściu do lewego poddrzewa?",
        options: [
            { text: "Jeśli lewe dziecko węzła $x$ istnieje (`x.left != NIL`) oraz maksymalny koniec w jego poddrzewie jest większy lub równy początkowi szukanego przedziału (`x.left.max >= i.low`).", isCorrect: true },
            { text: "Jeśli pole `x.left.max` jest równe wartości szukanego `i.high`.", isCorrect: false },
            { text: "Jeśli interwał $i$ mieści się w całości we wskaźniku lewego brata `x.left.low < i.high`.", isCorrect: false },
            { text: "Jeśli drzewo przedziałowe posiada kolor czerwony na lewym potomku.", isCorrect: false }
        ]
    },
    {
        id: 228,
        category: "Struktury Danych: Drzewa Czerwono-Czarne (RB)",
        text: "Kiedy dołączasz nowy element (zawsze czerwony) do drzewa Czerwono-Czarnego, jakie działania są podejmowane, gdy wujek wstawianego węzła jest CZARNY, a sam węzeł z rodzicem tworzą 'Kształt L' (np. węzeł jest prawym dzieckiem, a rodzic lewym dzieckiem)?",
        options: [
            { text: "Sytuacja jest redukowana do 'Kształtu Linii' poprzez pojedynczą rotację na rodzicu, co sprowadza problem do kolejnego przypadku (Case 3 z Cormena).", isCorrect: true },
            { text: "Wujek oraz rodzic stają się czarni, a dziadek zostaje przemalowany na czerwono.", isCorrect: false },
            { text: "Węzeł zostaje usunięty i przekazany z powrotem do funkcji `Tree-Insert` na poziomie wyżej.", isCorrect: false },
            { text: "Wykonywane są dwie rotacje: bezpośrednio na wujku oraz podwójna rotacja w lewo na korzeniu.", isCorrect: false }
        ]
    },
    {
        id: 229,
        category: "Algorytmy Grafowe: Skierowane Grafy Acykliczne (DAG)",
        text: "Na jakiej właściwości topologicznej z DFS opiera się poszukiwanie najkrótszych ścieżek w grafach DAG algorytmem Bellmana-Forda w czasie liniowym $O(V+E)$?",
        options: [
            { text: "W grafie DAG (bez cykli), krawędzie można relaksować dokładnie jeden raz, pod warunkiem robienia tego w kolejności topologicznej wierzchołków.", isCorrect: true },
            { text: "Dla grafu DAG macierz wag jest symetryczna, co redukuje algorytm z $V^3$ do $V+E$.", isCorrect: false },
            { text: "Grafy DAG z definicji nie mogą posiadać krawędzi o wagach ujemnych, więc redukują się do BFS.", isCorrect: false },
            { text: "Wystarczy zbudować Las Rozpinający wykorzystując technikę Find-Set Kruskala.", isCorrect: false }
        ]
    },
    {
        id: 230,
        category: "Algorytmy Grafowe: Minimalne Drzewo Rozpinające (MST)",
        text: "W algorytmie Prima `MST-Prim(G, w, r)`, wartość `key[v]` przechowuje:",
        options: [
            { text: "Najmniejszą wagę spośród krawędzi łączących wierzchołek $v$ z dowolnym wierzchołkiem należącym już do budowanego drzewa.", isCorrect: true },
            { text: "Suma wag wszystkich krawędzi od korzenia początkowego $r$ do $v$.", isCorrect: false },
            { text: "Indeks wierzchołka $v$ z tablicy sąsiedztwa po procesie haszowania.", isCorrect: false },
            { text: "Liczbę krawędzi incydentnych do $v$, które jeszcze nie znalazły się w kolejce priorytetowej.", isCorrect: false }
        ]
    },
    {
        id: 231,
        category: "Sieci Przepływowe: Teoria",
        text: "Zgodnie z definicją przepustowości przekroju (Cut capacity) w sieci przepływowej $(S, T)$:",
        options: [
            { text: "Przepustowość przekroju uwzględnia sumę wag wyłącznie krawędzi wychodzących ze zbioru $S$ i wchodzących do $T$.", isCorrect: true },
            { text: "Przepustowość przekroju to suma wag krawędzi w obu kierunkach ($S$ do $T$ oraz $T$ do $S$).", isCorrect: false },
            { text: "Przepustowość ta jest zawsze mniejsza niż jakikolwiek legalny przepływ w sieci.", isCorrect: false },
            { text: "Uwzględnia ona wyłącznie ścieżki powiększające o wartości residualnej większej od zera.", isCorrect: false }
        ]
    },
    {
        id: 232,
        category: "Sieci Przepływowe: Złożoność",
        text: "Dlaczego algorytm Edmondsa-Karpa gwarantuje złożoność wielomianową $O(V \\cdot E^2)$ niezależnie od pojemności krawędzi (w przeciwieństwie do naiwnego Forda-Fulkersona)?",
        options: [
            { text: "Ponieważ do znajdowania ścieżek powiększających wykorzystuje algorytm BFS, dobierając ścieżkę o najmniejszej liczbie krawędzi.", isCorrect: true },
            { text: "Ponieważ wywołuje algorytm Dijkstry wykorzystujący kopiec Fibonacciego w sieci residualnej.", isCorrect: false },
            { text: "Ponieważ sortuje krawędzie w sieci przepływowej malejąco przed każdym cięciem $O(E \\log V)$.", isCorrect: false },
            { text: "Ponieważ wprowadza wagi losowe zrandomizowane w celu oszukania cykli.", isCorrect: false }
        ]
    },
    {
        id: 233,
        category: "Algorytmy Tekstowe: Wyszukiwanie Wzorca",
        text: "Jak zbudowana jest funkcja przejścia (tablica) w wyszukiwaniu wzorca przy pomocy Automatu Skończenie Stanowego?",
        options: [
            { text: "Dla każdego stanu $q$ i znaku $a$, funkcja przejścia $\\delta(q, a)$ zapisuje długość najdłuższego prefiksu wzorca $P$, który jest równocześnie sufiksem ciągu $P_q a$.", isCorrect: true },
            { text: "Oblicza hash (sumę algebraiczną) dla wszystkich liter alfabetu $a$, w oparciu o regułę Hornera.", isCorrect: false },
            { text: "Korzysta z heurystyki 'złego znaku', by skoczyć o największą liczbę różnic we wzorcu.", isCorrect: false },
            { text: "Tworzy tablicę zliczeń ASCII dla każdego okna tekstowego by uzyskać $O(n)$ pesymistycznie.", isCorrect: false }
        ]
    },
    {
        id: 234,
        category: "Algorytmy Tekstowe: KMP",
        text: "Procedura `Compute-Prefix-Function(P)` w algorytmie KMP buduje tablicę $\\pi$. Jaka jest asymptotyczna złożoność tej procedury i z jakiego powodu?",
        options: [
            { text: "Wynosi $\\Theta(m)$, co wynika z analizy zamortyzowanej (wartość zmiennej $k$ rośnie łącznie o max $m$ w pętli zewnętrznej i zmniejsza się wyłącznie, co ogranicza iteracje pętli wewnętrznej `while`).", isCorrect: true },
            { text: "Wynosi $\\Theta(m^2)$, ponieważ pętla `while` w każdym kroku pętli `for` sprawdza z powrotem od zera cały dotychczasowy wzorzec.", isCorrect: false },
            { text: "Wynosi $\\Theta(m \\log m)$, ponieważ tablica jest trzymana na strukturze kopca do szybkiego indeksowania.", isCorrect: false },
            { text: "Wynosi $\\Theta(|\\Sigma| \\cdot m)$, ponieważ sprawdza dopasowania dla całego alfabetu przy każdej literze.", isCorrect: false }
        ]
    },
    {
        id: 235,
        category: "Algorytmy Tekstowe: Boyer-Moore",
        text: "Czym jest heurystyka 'dobrego sufiksu' (Good Suffix Heuristic) w algorytmie Boyera-Moore'a?",
        options: [
            { text: "Kiedy wystąpi niezgodność, pozwala na przesunięcie wzorca tak, aby pasujący już fragment (sufiks) wyrównał się z jego innym wystąpieniem we wzorcu (lub by maksymalny prefiks wyrównał się z sufiksem tego fragmentu).", isCorrect: true },
            { text: "Kiedy wystąpi niezgodność, przesuwa pozycję wzorca za znak tekstu, z którym wystąpiła, ponieważ 'dobry sufiks' wymusza czytanie od prawej.", isCorrect: false },
            { text: "Oblicza hasz ostatniego sprawdzanego znaku i zrównuje go ze stosem wartości w pamięci L1.", isCorrect: false },
            { text: "Optymalizuje pamięć kosztem zmniejszenia tablicy o te same litery zebrane na końcu wektora.", isCorrect: false }
        ]
    },
    {
        id: 236,
        category: "Kompresja: Algorytm LZW",
        text: "W jaki sposób odbywa się inicjalizacja w kompresji słownikowej LZW?",
        options: [
            { text: "Słownik przed rozpoczęciem kompresji jest inicjowany zestawem podstawowych znaków alfabetu (np. pełną tabelą ASCII długości 256).", isCorrect: true },
            { text: "Słownik na początku zawsze zawiera dokładnie jeden pusty symbol reprezentujący korzeń drzewa.", isCorrect: false },
            { text: "Program wylicza najpierw entropię dla wszystkich słów i ładuje 10 najczęstszych.", isCorrect: false },
            { text: "Wykorzystuje się kopiec priorytetowy inicjowany od wewnątrz algorytmem 'Build-Heap'.", isCorrect: false }
        ]
    },
    {
        id: 237,
        category: "Kompresja: Algorytm Huffmana",
        text: "Który z poniższych argumentów uzasadnia optymalność kodowania Huffmana względem Teorematu o Kodzie Bezstratnym?",
        options: [
            { text: "Kodowanie to wykorzystuje właściwość zachłannego wyboru: dwa elementy z najmniejszą częstością występowania otrzymują zawsze najdłuższe (i różniące się o bit) ścieżki w drzewie kodu prefiksowego.", isCorrect: true },
            { text: "Zapewnia on stałą długość kodu dla każdego symbolu, minimalizując błędy wejścia/wyjścia.", isCorrect: false },
            { text: "Optymalizuje entropię przypisując rzadkim znakom najkrótsze możliwe ścieżki w lewym poddrzewie.", isCorrect: false },
            { text: "Jest równoważny poszukiwaniom cyklu Eulera, redukując problem dekodowania do czasu $O(1)$.", isCorrect: false }
        ]
    },
    {
        id: 238,
        category: "Algorytmy Równoległe: Taksonomia Flynna",
        text: "System wykorzystujący architekturę MIMD z pamięcią współdzieloną charakteryzuje się tym, że:",
        options: [
            { text: "Wiele procesorów wykonuje niezależne od siebie strumienie instrukcji na różnych zbiorach danych, komunikując się poprzez jedną wspólną pamięć.", isCorrect: true },
            { text: "Jeden główny procesor dystrybuuje te same instrukcje na wiele lokalnych jednostek ALU.", isCorrect: false },
            { text: "Pamięć jest całkowicie odcięta, a maszyny komunikują się jedynie siecią komunikatów UDP.", isCorrect: false },
            { text: "Wiele strumieni instrukcji przechodzi potokowo na jeden rdzeń (superskalarność w SISD).", isCorrect: false }
        ]
    },
    {
        id: 239,
        category: "Algorytmy Równoległe: Modele PRAM",
        text: "Który z modeli Parallel Random Access Machine (PRAM) jest najbardziej obostrzony (najtrudniejszy do programowania, lecz sprzętowo najłatwiejszy do realizacji)?",
        options: [
            { text: "EREW (Exclusive Read, Exclusive Write) – żaden węzeł nie może jednocześnie czytać ani pisać pod ten sam adres co inny.", isCorrect: true },
            { text: "CRCW (Concurrent Read, Concurrent Write) – brak ograniczeń synchronizacji na szynie.", isCorrect: false },
            { text: "CREW (Concurrent Read, Exclusive Write) – można jednocześnie czytać, ale pisać po kolei.", isCorrect: false },
            { text: "ERCW (Exclusive Read, Concurrent Write) – zakaz równoczesnego odczytu przy dopuszczeniu zapisu.", isCorrect: false }
        ]
    },
    {
        id: 240,
        category: "Algorytmy Równoległe",
        text: "W jaki sposób w algorytmach równoległych optymalizuje się wyznaczenie min/max na tablicy z użyciem procesorów?",
        options: [
            { text: "Używając techniki zrównoważonego drzewa redukcji, w której w każdym kroku połowa dostępnych procesorów wylicza min z pary, schodząc do czasu $O(\\log n)$.", isCorrect: true },
            { text: "Przekazując tablicę każdemu z n procesorów w formacie CREW do sekwencyjnego wyszukania z $O(n^2)$.", isCorrect: false },
            { text: "Wdrażając protokół priorytetów CRCW, w którym procesor z największą wartością pisze wynik do wspólnego adresu w czasie $O(1)$.", isCorrect: true },
            { text: "Poprzez spłaszczenie i użycie sortowania bąbelkowego na blokach $P_i$.", isCorrect: false }
        ]
    },
    {
        id: 241,
        category: "Algorytmy Geometryczne",
        text: "Na czym opiera się fundamentalny test w geometrii obliczeniowej: sprawdzenie czy dwa odcinki $p_1p_2$ oraz $p_3p_4$ się przecinają (tzw. test przecięcia odcinków)?",
        options: [
            { text: "Sprawdza się za pomocą iloczynów wektorowych, czy dla obu prostych zawierających odcinki końce drugiego odcinka leżą po jej przeciwnych stronach (rozkraczają prostą).", isCorrect: true },
            { text: "Przyrównuje się wartości funkcji cosinus z twierdzenia Snelliusa na podstawie odległości.", isCorrect: false },
            { text: "Zakłada obrysowanie obu odcinków prostokątami (bounding box) jako test absolutny i ostateczny.", isCorrect: false },
            { text: "Sortuje się je metodą kątową wokół wspólnego środka ciężkości.", isCorrect: false }
        ]
    },
    {
        id: 242,
        category: "Algorytmy Geometryczne: Otoczka Wypukła",
        text: "W algorytmie Grahama budowania otoczki wypukłej używany jest stos $S$. Jaki jest warunek wycofania z niego wierzchołka (operacja POP) przy weryfikacji nowego punktu $p_i$?",
        options: [
            { text: "Jeśli wektory utworzone przez przedostatni punkt ze stosu, top stosu i punkt $p_i$ NIE tworzą 'skrętu w lewo' (np. tworzą skręt w prawo, iloczyn wektorowy $\\le 0$).", isCorrect: true },
            { text: "Jeśli współrzędna y punktu $p_i$ staje się mniejsza niż top ze stosu.", isCorrect: false },
            { text: "Gdy wektor zderza się ze ścianą zamiatania (sweep line intersection).", isCorrect: false },
            { text: "Kiedy stos zapełni się $n-1$ elementami, aby oczyścić pamięć rezydualną.", isCorrect: false }
        ]
    },
    {
        id: 243,
        category: "Algorytmy Geometryczne: Algorytm Zamiatania",
        text: "W algorytmie sprawdzania czy występuje przecięcie w zbiorze odcinków (zamiatanie / Sweep-line), jakie struktury danych są wymagane do uzyskania czasu $O(n \\log n)$?",
        options: [
            { text: "Kolejka priorytetowa dla 'Kolejki Zdarzeń' na osi X oraz zrównoważone drzewo (np. Red-Black) do przechowywania statusu relacji ułożenia na osi Y (tzw. stanu zamiatania).", isCorrect: true },
            { text: "Dwie sprzężone ze sobą tablice haszujące oraz stos podwójny.", isCorrect: false },
            { text: "Las struktur zbiorów rozłącznych z Union-Find oraz Macierz Rzadka.", isCorrect: false },
            { text: "Graf reprezentowany przez listy sąsiedztwa połączony z procedurą Tarjana.", isCorrect: false }
        ]
    },
    {
        id: 244,
        category: "Algorytmy Geometryczne: Najbliższa para punktów",
        text: "W fazie scalania (Conquer) dla algorytmu wyszukiwania najbliższej pary punktów Dziel i Zwyciężaj na płaszczyźnie, dla danego punktu z wyznaczonego pasa granicznego sprawdzamy najwyżej:",
        options: [
            { text: "7 (lub 8, zależnie od założeń krawędziowych) punktów z drugiej strony granicy, które mieszczą się w wyznaczonym oknie czasowym $\\delta \\times 2\\delta$.", isCorrect: true },
            { text: "Wszystkie punkty w podtablicy, ponieważ problem zredukowany z osi X powraca do 2D ($O(n)$ dla każdego elementu).", isCorrect: false },
            { text: "Punkty tylko z jednej, posortowanej osi X używając prostej tablicy jednoelementowej.", isCorrect: false },
            { text: "Wykonywane jest rekurencyjne sprawdzenie promienia koła opisanego na pozostałych punktach.", isCorrect: false }
        ]
    },
    {
        id: 245,
        category: "Analiza Zamortyzowana: Tablice",
        text: "Zgodnie z metodą Potencjału w analizie zamortyzowanej tablicy dynamicznej, która powiększa i zmniejsza rozmiar, potencjał $\\Phi$ gdy tablica ma status ponad półpełny często definiowany jest jako:",
        options: [
            { text: "$\\Phi(D) = 2 \\cdot num - size$, gdzie 'num' to ilość elementów, a 'size' rozmiar tablicy, co daje nam $size$ odłożonych kredytów w momencie pełnego wypełnienia.", isCorrect: true },
            { text: "$\\Phi(D) = num - 2 \\cdot size$, przez co funkcja zawsze jest ujemna, dopóki tablica nie zostanie zrekompensowana ucinaniem rozmiaru.", isCorrect: false },
            { text: "$\\Phi(D) = \\log(num)$, jako podstawa drzewa kosztów rozszerzających.", isCorrect: false },
            { text: "$\\Phi(D)$ musi być zawsze równe 0 dla optymalnego algorytmu.", isCorrect: false }
        ]
    },
    {
        id: 246,
        category: "Algorytmy Sortowania: Analiza Modelu Drzewa",
        text: "Na czym opiera się dowód, że algorytmy sortowania wykorzystujące porównania mają dolne ograniczenie na poziomie $\\Omega(n \\log n)$?",
        options: [
            { text: "Drzewo decyzyjne dla $n$ elementów musi mieć przynajmniej $n!$ (n silnia) liści, co z własności wysokości drzewa binarnego $h \\ge \\log_2(n!)$ daje przybliżenie Stirlinga $\\Omega(n \\log n)$.", isCorrect: true },
            { text: "Na zastosowaniu Twierdzenia o Rekurencji Uniwersalnej do ułamków potęg z równania Quicksort.", isCorrect: false },
            { text: "Na faktu, że czas dostępu do każdej tablicy to z definicji logarytm jej indeksu głównego.", isCorrect: false },
            { text: "Na nieuchronności kolizji wartości stałych co obciąża pętle bąbelkową o czynnik kwadratowy, o ile nie ułamkowy.", isCorrect: false }
        ]
    },
    {
        id: 247,
        category: "Struktury Danych: Analiza",
        text: "W jakich sytuacjach należy zrezygnować z naiwnego drzewa BST i zdecydować się na implementację drzewa Czerwono-Czarnego lub AVL?",
        options: [
            { text: "Kiedy dane wprowadzane są do drzewa powoli i w sposób uporządkowany (posortowany), co u zwykłego BST generuje najgorszy przypadek w postaci wydłużonej listy i daje operacje w czasie $O(n)$.", isCorrect: true },
            { text: "Kiedy brakuje nam miejsca w pamięci z powodu braku wskaźników do przodka (ojca).", isCorrect: false },
            { text: "Tylko w zastosowaniach w systemach wielordzeniowych gdzie kolor stanowi flagę dostępu LOCK dla wątku.", isCorrect: false },
            { text: "Drzewo BST powinno być wykorzystywane zamiast nich zawsze, by unikać nakładu obliczeniowego.", isCorrect: false }
        ]
    },
    {
        id: 248,
        category: "Struktury Danych: Kopce Priorytetowe",
        text: "W operacji podwyższania priorytetu elementu w kopcu typu Max, `Heap-Increase-Key(A, i, key)`, jak zachowuje się algorytm gdy zmieniono wartość klucza w węźle `i`?",
        options: [
            { text: "Iteracyjnie porównuje węzeł $i$ z jego rodzicem i wywołuje na nich zamianę (swap) dotąd, aż rodzic będzie większy/równy, lub dotrze do korzenia $A[1]$.", isCorrect: true },
            { text: "Przebudowuje cały kopiec wywołaniem `Build-Heap` celem potwierdzenia zbalansowania położeń.", isCorrect: false },
            { text: "Zanurza element do liści korzystając z operacji `Max-Heapify(A, i)` w dół.", isCorrect: false },
            { text: "Dzieli kopiec na dwa drzewa fibonacciego przy użyciu zrzutu 'decrease'.", isCorrect: false }
        ]
    },
    {
        id: 249,
        category: "Grafy: Twierdzenia Grafowe",
        text: "Lemat dotyczący wyznaczania Minimalnego Drzewa Rozpinającego zakłada pojęcie krawędzi 'bezpiecznej' (safe edge). Krawędź ta:",
        options: [
            { text: "Gdy zostanie dodana do częściowo zbudowanego już MST (zgodnego z jakimś pełnym MST), otrzymany zbiór krawędzi nadal jest podzbiorem pewnego pełnego optymalnego MST.", isCorrect: true },
            { text: "Jej waga musi wynosić dokładnie 0 lub 1.", isCorrect: false },
            { text: "Odpowiada najdroższej krawędzi tworzącej cykl na zadanym wykresie dwudzielnym.", isCorrect: false },
            { text: "To krawędź dodawana przez algorytm relaksacji przy ścieżkach skierowanych i negatywnych.", isCorrect: false }
        ]
    },
    {
        id: 250,
        category: "Struktury Danych: Kopce",
        text: "Gdzie musi znajdować się węzeł przechowujący najmniejszą wartość w strukturze Kopca Binamego typu Max (Max-Heap)?",
        options: [
            { text: "Musi on być jednym z liści (elementy tablicy na indeksach od $\\lfloor n/2 \\rfloor + 1$ do $n$).", isCorrect: true },
            { text: "Zawsze na lewym końcu poddrzewa (jak w standardowym BST).", isCorrect: false },
            { text: "Znajduje się on dokładnie na miejscu $n$ (zawsze na samym końcu tablicy).", isCorrect: false },
            { text: "Kopiec typu Max trzyma tylko element maksymalny, mniejsze są ignorowane na etapie tworzenia wskaźników.", isCorrect: false }
        ]
    },
    {
        id: 221,
        category: "Wprowadzenie: Dowód Algorytmu",
        text: "W rozumowaniu indukcyjnym (dowodzie indukcyjnym) poprawności niezmiennika pętli, czemu odpowiada 'krok indukcyjny' (inductive step)?",
        options: [
            { text: "Wyraża się poprzez pokazanie, że jeśli niezmiennik jest prawdziwy przed iteracją pętli, to pozostaje prawdziwy również przed następną iteracją.", isCorrect: true },
            { text: "Polega na udowodnieniu poprawności bazy, tj. faktu, że algorytm w ogóle wchodzi w główną pętlę.", isCorrect: false },
            { text: "To faza zakończenia, w której udowadniamy, że po wyjściu z pętli algorytm zwraca optymalny wynik.", isCorrect: false },
            { text: "Jest to matematyczne udowodnienie, że złożoność pętli wynosi $O(n)$ dla dowolnego $n$.", isCorrect: false }
        ]
    },
    {
        id: 222,
        category: "Algorytmy Sortowania: Radix Sort",
        text: "Jaka jest dokładna złożoność czasowa algorytmu Radix Sort dla $n$ słów/liczb o długości $d$ cyfr, jeśli do stabilnego sortowania użyjemy sortowania przez zliczanie z zakresem wartości $0..k$ dla każdej cyfry?",
        options: [
            { text: "$\\Theta(d(n + k))$", isCorrect: true },
            { text: "$\\Theta(n \\cdot d^k)$", isCorrect: false },
            { text: "$O(n \\log_k d)$", isCorrect: false },
            { text: "$\\Theta(n + d \\cdot k)$", isCorrect: false }
        ]
    },
    {
        id: 223,
        category: "Algorytmy Sortowania: Bucket Sort",
        text: "Zgodnie z procedurą `Bucket-Sort(A)` dla danych wpadających w rozkład jednostajny na przedziale $[0, 1)$, co robi operacja przyporządkowania elementu do kubełka dla tablicy o rozmiarze $n$?",
        options: [
            { text: "Wstawia element $A[i]$ do listy dowiązaniowej znajdującej się pod indeksem $B[\\lfloor n \\cdot A[i] \\rfloor]$.", isCorrect: true },
            { text: "Dzieli wartość $A[i]$ przez $n$ i wyciąga z tego sufit (CEILING).", isCorrect: false },
            { text: "Wykonuje operację $A[i] \\bmod n$ i mapuje do lokalnej tablicy haszującej.", isCorrect: false },
            { text: "Wykorzystuje strukturę Union-Find do pogrupowania kubełków w bloki wielkości $k$.", isCorrect: false }
        ]
    },
    {
        id: 224,
        category: "Struktury Danych: Tablice Haszujące",
        text: "Jak zdefiniowany jest ciąg próbkowania dla haszowania dwukrotnego (double hashing) przy adresowaniu otwartym?",
        options: [
            { text: "$h(k, i) = (h_1(k) + i \\cdot h_2(k)) \\bmod m$", isCorrect: true },
            { text: "$h(k, i) = (h_1(k) + c_1 \\cdot i + c_2 \\cdot i^2) \\bmod m$", isCorrect: false },
            { text: "$h(k, i) = (h_1(k) \\cdot h_2(i)) \\bmod m$", isCorrect: false },
            { text: "$h(k, i) = (h_1(k) + i) \\bmod m$", isCorrect: false }
        ]
    },
    {
        id: 225,
        category: "Struktury Danych: Tablice Haszujące",
        text: "W haszowaniu dwukrotnym wartość funkcji pomocniczej $h_2(k)$ musi spełniać pewien matematyczny warunek względem wielkości tablicy $m$. Jaki?",
        options: [
            { text: "Wartość $h_2(k)$ i rozmiar tablicy $m$ muszą być względnie pierwsze (ich największy wspólny dzielnik NWD wynosi 1), aby próbkowanie przeszło przez całą tablicę.", isCorrect: true },
            { text: "Rozmiar tablicy $m$ musi być zawsze podzielny przez $h_2(k)$, by zjawisko primary clusteringu zostało wyeliminowane.", isCorrect: false },
            { text: "Wartość $h_2(k)$ musi wynosić dokładnie $\\log m$.", isCorrect: false },
            { text: "NWD($h_2(k)$, $m$) musi być parzyste, jeśli $m$ jest potęgą dwójki.", isCorrect: false }
        ]
    },
    {
        id: 226,
        category: "Dynamiczne Statystyki Pozycyjne (OS-Tree)",
        text: "Podczas wykonywania rotacji w lewo (Left-Rotate) na węźle $x$, którego prawym dzieckiem jest $y$, w jaki sposób aktualizowane jest pole `size` (rozmiar poddrzewa) utrzymywane przez OS-Tree?",
        options: [
            { text: "`y.size = x.size` oraz `x.size = x.left.size + x.right.size + 1`", isCorrect: true },
            { text: "`x.size = y.size` oraz `y.size = y.left.size + y.right.size + 1`", isCorrect: false },
            { text: "`x.size = y.size - 1`", isCorrect: false },
            { text: "Pole `size` inkrementowane jest o 1 tylko w korzeniu głównym drzewa.", isCorrect: false }
        ]
    },
    {
        id: 227,
        category: "Struktury Danych: Drzewa Przedziałowe",
        text: "W operacji `Interval-Search(T, i)` w drzewie przedziałowym (Interval Tree), jaki jest warunek gwarantujący poprawność decyzji o zejściu do lewego poddrzewa?",
        options: [
            { text: "Jeśli lewe dziecko węzła $x$ istnieje (`x.left != NIL`) oraz maksymalny koniec w jego poddrzewie jest większy lub równy początkowi szukanego przedziału (`x.left.max >= i.low`).", isCorrect: true },
            { text: "Jeśli pole `x.left.max` jest równe wartości szukanego `i.high`.", isCorrect: false },
            { text: "Jeśli interwał $i$ mieści się w całości we wskaźniku lewego brata `x.left.low < i.high`.", isCorrect: false },
            { text: "Jeśli drzewo przedziałowe posiada kolor czerwony na lewym potomku.", isCorrect: false }
        ]
    },
    {
        id: 228,
        category: "Struktury Danych: Drzewa Czerwono-Czarne (RB)",
        text: "Kiedy dołączasz nowy element (zawsze czerwony) do drzewa Czerwono-Czarnego, jakie działania są podejmowane, gdy wujek wstawianego węzła jest CZARNY, a sam węzeł z rodzicem tworzą 'Kształt L' (np. węzeł jest prawym dzieckiem, a rodzic lewym dzieckiem)?",
        options: [
            { text: "Sytuacja jest redukowana do 'Kształtu Linii' poprzez pojedynczą rotację na rodzicu, co sprowadza problem do kolejnego przypadku (Case 3 z Cormena).", isCorrect: true },
            { text: "Wujek oraz rodzic stają się czarni, a dziadek zostaje przemalowany na czerwono.", isCorrect: false },
            { text: "Węzeł zostaje usunięty i przekazany z powrotem do funkcji `Tree-Insert` na poziomie wyżej.", isCorrect: false },
            { text: "Wykonywane są dwie rotacje: bezpośrednio na wujku oraz podwójna rotacja w lewo na korzeniu.", isCorrect: false }
        ]
    },
    {
        id: 229,
        category: "Algorytmy Grafowe: Skierowane Grafy Acykliczne (DAG)",
        text: "Na jakiej właściwości topologicznej z DFS opiera się poszukiwanie najkrótszych ścieżek w grafach DAG algorytmem Bellmana-Forda w czasie liniowym $O(V+E)$?",
        options: [
            { text: "W grafie DAG (bez cykli), krawędzie można relaksować dokładnie jeden raz, pod warunkiem robienia tego w kolejności topologicznej wierzchołków.", isCorrect: true },
            { text: "Dla grafu DAG macierz wag jest symetryczna, co redukuje algorytm z $V^3$ do $V+E$.", isCorrect: false },
            { text: "Grafy DAG z definicji nie mogą posiadać krawędzi o wagach ujemnych, więc redukują się do BFS.", isCorrect: false },
            { text: "Wystarczy zbudować Las Rozpinający wykorzystując technikę Find-Set Kruskala.", isCorrect: false }
        ]
    },
    {
        id: 230,
        category: "Algorytmy Grafowe: Minimalne Drzewo Rozpinające (MST)",
        text: "W algorytmie Prima `MST-Prim(G, w, r)`, wartość `key[v]` przechowuje:",
        options: [
            { text: "Najmniejszą wagę spośród krawędzi łączących wierzchołek $v$ z dowolnym wierzchołkiem należącym już do budowanego drzewa.", isCorrect: true },
            { text: "Suma wag wszystkich krawędzi od korzenia początkowego $r$ do $v$.", isCorrect: false },
            { text: "Indeks wierzchołka $v$ z tablicy sąsiedztwa po procesie haszowania.", isCorrect: false },
            { text: "Liczbę krawędzi incydentnych do $v$, które jeszcze nie znalazły się w kolejce priorytetowej.", isCorrect: false }
        ]
    },
    {
        id: 231,
        category: "Sieci Przepływowe: Teoria",
        text: "Zgodnie z definicją przepustowości przekroju (Cut capacity) w sieci przepływowej $(S, T)$:",
        options: [
            { text: "Przepustowość przekroju uwzględnia sumę wag wyłącznie krawędzi wychodzących ze zbioru $S$ i wchodzących do $T$.", isCorrect: true },
            { text: "Przepustowość przekroju to suma wag krawędzi w obu kierunkach ($S$ do $T$ oraz $T$ do $S$).", isCorrect: false },
            { text: "Przepustowość ta jest zawsze mniejsza niż jakikolwiek legalny przepływ w sieci.", isCorrect: false },
            { text: "Uwzględnia ona wyłącznie ścieżki powiększające o wartości residualnej większej od zera.", isCorrect: false }
        ]
    },
    {
        id: 232,
        category: "Sieci Przepływowe: Złożoność",
        text: "Dlaczego algorytm Edmondsa-Karpa gwarantuje złożoność wielomianową $O(V \\cdot E^2)$ niezależnie od pojemności krawędzi (w przeciwieństwie do naiwnego Forda-Fulkersona)?",
        options: [
            { text: "Ponieważ do znajdowania ścieżek powiększających wykorzystuje algorytm BFS, dobierając ścieżkę o najmniejszej liczbie krawędzi.", isCorrect: true },
            { text: "Ponieważ wywołuje algorytm Dijkstry wykorzystujący kopiec Fibonacciego w sieci residualnej.", isCorrect: false },
            { text: "Ponieważ sortuje krawędzie w sieci przepływowej malejąco przed każdym cięciem $O(E \\log V)$.", isCorrect: false },
            { text: "Ponieważ wprowadza wagi losowe zrandomizowane w celu oszukania cykli.", isCorrect: false }
        ]
    },
    {
        id: 233,
        category: "Algorytmy Tekstowe: Wyszukiwanie Wzorca",
        text: "Jak zbudowana jest funkcja przejścia (tablica) w wyszukiwaniu wzorca przy pomocy Automatu Skończenie Stanowego?",
        options: [
            { text: "Dla każdego stanu $q$ i znaku $a$, funkcja przejścia $\\delta(q, a)$ zapisuje długość najdłuższego prefiksu wzorca $P$, który jest równocześnie sufiksem ciągu $P_q a$.", isCorrect: true },
            { text: "Oblicza hash (sumę algebraiczną) dla wszystkich liter alfabetu $a$, w oparciu o regułę Hornera.", isCorrect: false },
            { text: "Korzysta z heurystyki 'złego znaku', by skoczyć o największą liczbę różnic we wzorcu.", isCorrect: false },
            { text: "Tworzy tablicę zliczeń ASCII dla każdego okna tekstowego by uzyskać $O(n)$ pesymistycznie.", isCorrect: false }
        ]
    },
    {
        id: 234,
        category: "Algorytmy Tekstowe: KMP",
        text: "Procedura `Compute-Prefix-Function(P)` w algorytmie KMP buduje tablicę $\\pi$. Jaka jest asymptotyczna złożoność tej procedury i z jakiego powodu?",
        options: [
            { text: "Wynosi $\\Theta(m)$, co wynika z analizy zamortyzowanej (wartość zmiennej $k$ rośnie łącznie o max $m$ w pętli zewnętrznej i zmniejsza się wyłącznie, co ogranicza iteracje pętli wewnętrznej `while`).", isCorrect: true },
            { text: "Wynosi $\\Theta(m^2)$, ponieważ pętla `while` w każdym kroku pętli `for` sprawdza z powrotem od zera cały dotychczasowy wzorzec.", isCorrect: false },
            { text: "Wynosi $\\Theta(m \\log m)$, ponieważ tablica jest trzymana na strukturze kopca do szybkiego indeksowania.", isCorrect: false },
            { text: "Wynosi $\\Theta(|\\Sigma| \\cdot m)$, ponieważ sprawdza dopasowania dla całego alfabetu przy każdej literze.", isCorrect: false }
        ]
    },
    {
        id: 235,
        category: "Algorytmy Tekstowe: Boyer-Moore",
        text: "Czym jest heurystyka 'dobrego sufiksu' (Good Suffix Heuristic) w algorytmie Boyera-Moore'a?",
        options: [
            { text: "Kiedy wystąpi niezgodność, pozwala na przesunięcie wzorca tak, aby pasujący już fragment (sufiks) wyrównał się z jego innym wystąpieniem we wzorcu (lub by maksymalny prefiks wyrównał się z sufiksem tego fragmentu).", isCorrect: true },
            { text: "Kiedy wystąpi niezgodność, przesuwa pozycję wzorca za znak tekstu, z którym wystąpiła, ponieważ 'dobry sufiks' wymusza czytanie od prawej.", isCorrect: false },
            { text: "Oblicza hasz ostatniego sprawdzanego znaku i zrównuje go ze stosem wartości w pamięci L1.", isCorrect: false },
            { text: "Optymalizuje pamięć kosztem zmniejszenia tablicy o te same litery zebrane na końcu wektora.", isCorrect: false }
        ]
    },
    {
        id: 236,
        category: "Kompresja: Algorytm LZW",
        text: "W jaki sposób odbywa się inicjalizacja w kompresji słownikowej LZW?",
        options: [
            { text: "Słownik przed rozpoczęciem kompresji jest inicjowany zestawem podstawowych znaków alfabetu (np. pełną tabelą ASCII długości 256).", isCorrect: true },
            { text: "Słownik na początku zawsze zawiera dokładnie jeden pusty symbol reprezentujący korzeń drzewa.", isCorrect: false },
            { text: "Program wylicza najpierw entropię dla wszystkich słów i ładuje 10 najczęstszych.", isCorrect: false },
            { text: "Wykorzystuje się kopiec priorytetowy inicjowany od wewnątrz algorytmem 'Build-Heap'.", isCorrect: false }
        ]
    },
    {
        id: 237,
        category: "Kompresja: Algorytm Huffmana",
        text: "Który z poniższych argumentów uzasadnia optymalność kodowania Huffmana względem Teorematu o Kodzie Bezstratnym?",
        options: [
            { text: "Kodowanie to wykorzystuje właściwość zachłannego wyboru: dwa elementy z najmniejszą częstością występowania otrzymują zawsze najdłuższe (i różniące się o bit) ścieżki w drzewie kodu prefiksowego.", isCorrect: true },
            { text: "Zapewnia on stałą długość kodu dla każdego symbolu, minimalizując błędy wejścia/wyjścia.", isCorrect: false },
            { text: "Optymalizuje entropię przypisując rzadkim znakom najkrótsze możliwe ścieżki w lewym poddrzewie.", isCorrect: false },
            { text: "Jest równoważny poszukiwaniom cyklu Eulera, redukując problem dekodowania do czasu $O(1)$.", isCorrect: false }
        ]
    },
    {
        id: 238,
        category: "Algorytmy Równoległe: Taksonomia Flynna",
        text: "System wykorzystujący architekturę MIMD z pamięcią współdzieloną charakteryzuje się tym, że:",
        options: [
            { text: "Wiele procesorów wykonuje niezależne od siebie strumienie instrukcji na różnych zbiorach danych, komunikując się poprzez jedną wspólną pamięć.", isCorrect: true },
            { text: "Jeden główny procesor dystrybuuje te same instrukcje na wiele lokalnych jednostek ALU.", isCorrect: false },
            { text: "Pamięć jest całkowicie odcięta, a maszyny komunikują się jedynie siecią komunikatów UDP.", isCorrect: false },
            { text: "Wiele strumieni instrukcji przechodzi potokowo na jeden rdzeń (superskalarność w SISD).", isCorrect: false }
        ]
    },
    {
        id: 239,
        category: "Algorytmy Równoległe: Modele PRAM",
        text: "Który z modeli Parallel Random Access Machine (PRAM) jest najbardziej obostrzony (najtrudniejszy do programowania, lecz sprzętowo najłatwiejszy do realizacji)?",
        options: [
            { text: "EREW (Exclusive Read, Exclusive Write) – żaden węzeł nie może jednocześnie czytać ani pisać pod ten sam adres co inny.", isCorrect: true },
            { text: "CRCW (Concurrent Read, Concurrent Write) – brak ograniczeń synchronizacji na szynie.", isCorrect: false },
            { text: "CREW (Concurrent Read, Exclusive Write) – można jednocześnie czytać, ale pisać po kolei.", isCorrect: false },
            { text: "ERCW (Exclusive Read, Concurrent Write) – zakaz równoczesnego odczytu przy dopuszczeniu zapisu.", isCorrect: false }
        ]
    },
    {
        id: 240,
        category: "Algorytmy Równoległe",
        text: "W jaki sposób w algorytmach równoległych optymalizuje się wyznaczenie min/max na tablicy z użyciem procesorów?",
        options: [
            { text: "Używając techniki zrównoważonego drzewa redukcji, w której w każdym kroku połowa dostępnych procesorów wylicza min z pary, schodząc do czasu $O(\\log n)$.", isCorrect: true },
            { text: "Przekazując tablicę każdemu z n procesorów w formacie CREW do sekwencyjnego wyszukania z $O(n^2)$.", isCorrect: false },
            { text: "Wdrażając protokół priorytetów CRCW, w którym procesor z największą wartością pisze wynik do wspólnego adresu w czasie $O(1)$.", isCorrect: true },
            { text: "Poprzez spłaszczenie i użycie sortowania bąbelkowego na blokach $P_i$.", isCorrect: false }
        ]
    },
    {
        id: 241,
        category: "Algorytmy Geometryczne",
        text: "Na czym opiera się fundamentalny test w geometrii obliczeniowej: sprawdzenie czy dwa odcinki $p_1p_2$ oraz $p_3p_4$ się przecinają (tzw. test przecięcia odcinków)?",
        options: [
            { text: "Sprawdza się za pomocą iloczynów wektorowych, czy dla obu prostych zawierających odcinki końce drugiego odcinka leżą po jej przeciwnych stronach (rozkraczają prostą).", isCorrect: true },
            { text: "Przyrównuje się wartości funkcji cosinus z twierdzenia Snelliusa na podstawie odległości.", isCorrect: false },
            { text: "Zakłada obrysowanie obu odcinków prostokątami (bounding box) jako test absolutny i ostateczny.", isCorrect: false },
            { text: "Sortuje się je metodą kątową wokół wspólnego środka ciężkości.", isCorrect: false }
        ]
    },
    {
        id: 242,
        category: "Algorytmy Geometryczne: Otoczka Wypukła",
        text: "W algorytmie Grahama budowania otoczki wypukłej używany jest stos $S$. Jaki jest warunek wycofania z niego wierzchołka (operacja POP) przy weryfikacji nowego punktu $p_i$?",
        options: [
            { text: "Jeśli wektory utworzone przez przedostatni punkt ze stosu, top stosu i punkt $p_i$ NIE tworzą 'skrętu w lewo' (np. tworzą skręt w prawo, iloczyn wektorowy $\\le 0$).", isCorrect: true },
            { text: "Jeśli współrzędna y punktu $p_i$ staje się mniejsza niż top ze stosu.", isCorrect: false },
            { text: "Gdy wektor zderza się ze ścianą zamiatania (sweep line intersection).", isCorrect: false },
            { text: "Kiedy stos zapełni się $n-1$ elementami, aby oczyścić pamięć rezydualną.", isCorrect: false }
        ]
    },
    {
        id: 243,
        category: "Algorytmy Geometryczne: Algorytm Zamiatania",
        text: "W algorytmie sprawdzania czy występuje przecięcie w zbiorze odcinków (zamiatanie / Sweep-line), jakie struktury danych są wymagane do uzyskania czasu $O(n \\log n)$?",
        options: [
            { text: "Kolejka priorytetowa dla 'Kolejki Zdarzeń' na osi X oraz zrównoważone drzewo (np. Red-Black) do przechowywania statusu relacji ułożenia na osi Y (tzw. stanu zamiatania).", isCorrect: true },
            { text: "Dwie sprzężone ze sobą tablice haszujące oraz stos podwójny.", isCorrect: false },
            { text: "Las struktur zbiorów rozłącznych z Union-Find oraz Macierz Rzadka.", isCorrect: false },
            { text: "Graf reprezentowany przez listy sąsiedztwa połączony z procedurą Tarjana.", isCorrect: false }
        ]
    },
    {
        id: 244,
        category: "Algorytmy Geometryczne: Najbliższa para punktów",
        text: "W fazie scalania (Conquer) dla algorytmu wyszukiwania najbliższej pary punktów Dziel i Zwyciężaj na płaszczyźnie, dla danego punktu z wyznaczonego pasa granicznego sprawdzamy najwyżej:",
        options: [
            { text: "7 (lub 8, zależnie od założeń krawędziowych) punktów z drugiej strony granicy, które mieszczą się w wyznaczonym oknie czasowym $\\delta \\times 2\\delta$.", isCorrect: true },
            { text: "Wszystkie punkty w podtablicy, ponieważ problem zredukowany z osi X powraca do 2D ($O(n)$ dla każdego elementu).", isCorrect: false },
            { text: "Punkty tylko z jednej, posortowanej osi X używając prostej tablicy jednoelementowej.", isCorrect: false },
            { text: "Wykonywane jest rekurencyjne sprawdzenie promienia koła opisanego na pozostałych punktach.", isCorrect: false }
        ]
    },
    {
        id: 245,
        category: "Analiza Zamortyzowana: Tablice",
        text: "Zgodnie z metodą Potencjału w analizie zamortyzowanej tablicy dynamicznej, która powiększa i zmniejsza rozmiar, potencjał $\\Phi$ gdy tablica ma status ponad półpełny często definiowany jest jako:",
        options: [
            { text: "$\\Phi(D) = 2 \\cdot num - size$, gdzie 'num' to ilość elementów, a 'size' rozmiar tablicy, co daje nam $size$ odłożonych kredytów w momencie pełnego wypełnienia.", isCorrect: true },
            { text: "$\\Phi(D) = num - 2 \\cdot size$, przez co funkcja zawsze jest ujemna, dopóki tablica nie zostanie zrekompensowana ucinaniem rozmiaru.", isCorrect: false },
            { text: "$\\Phi(D) = \\log(num)$, jako podstawa drzewa kosztów rozszerzających.", isCorrect: false },
            { text: "$\\Phi(D)$ musi być zawsze równe 0 dla optymalnego algorytmu.", isCorrect: false }
        ]
    },
    {
        id: 246,
        category: "Algorytmy Sortowania: Analiza Modelu Drzewa",
        text: "Na czym opiera się dowód, że algorytmy sortowania wykorzystujące porównania mają dolne ograniczenie na poziomie $\\Omega(n \\log n)$?",
        options: [
            { text: "Drzewo decyzyjne dla $n$ elementów musi mieć przynajmniej $n!$ (n silnia) liści, co z własności wysokości drzewa binarnego $h \\ge \\log_2(n!)$ daje przybliżenie Stirlinga $\\Omega(n \\log n)$.", isCorrect: true },
            { text: "Na zastosowaniu Twierdzenia o Rekurencji Uniwersalnej do ułamków potęg z równania Quicksort.", isCorrect: false },
            { text: "Na faktu, że czas dostępu do każdej tablicy to z definicji logarytm jej indeksu głównego.", isCorrect: false },
            { text: "Na nieuchronności kolizji wartości stałych co obciąża pętle bąbelkową o czynnik kwadratowy, o ile nie ułamkowy.", isCorrect: false }
        ]
    },
    {
        id: 247,
        category: "Struktury Danych: Analiza",
        text: "W jakich sytuacjach należy zrezygnować z naiwnego drzewa BST i zdecydować się na implementację drzewa Czerwono-Czarnego lub AVL?",
        options: [
            { text: "Kiedy dane wprowadzane są do drzewa powoli i w sposób uporządkowany (posortowany), co u zwykłego BST generuje najgorszy przypadek w postaci wydłużonej listy i daje operacje w czasie $O(n)$.", isCorrect: true },
            { text: "Kiedy brakuje nam miejsca w pamięci z powodu braku wskaźników do przodka (ojca).", isCorrect: false },
            { text: "Tylko w zastosowaniach w systemach wielordzeniowych gdzie kolor stanowi flagę dostępu LOCK dla wątku.", isCorrect: false },
            { text: "Drzewo BST powinno być wykorzystywane zamiast nich zawsze, by unikać nakładu obliczeniowego.", isCorrect: false }
        ]
    },
    {
        id: 248,
        category: "Struktury Danych: Kopce Priorytetowe",
        text: "W operacji podwyższania priorytetu elementu w kopcu typu Max, `Heap-Increase-Key(A, i, key)`, jak zachowuje się algorytm gdy zmieniono wartość klucza w węźle `i`?",
        options: [
            { text: "Iteracyjnie porównuje węzeł $i$ z jego rodzicem i wywołuje na nich zamianę (swap) dotąd, aż rodzic będzie większy/równy, lub dotrze do korzenia $A[1]$.", isCorrect: true },
            { text: "Przebudowuje cały kopiec wywołaniem `Build-Heap` celem potwierdzenia zbalansowania położeń.", isCorrect: false },
            { text: "Zanurza element do liści korzystając z operacji `Max-Heapify(A, i)` w dół.", isCorrect: false },
            { text: "Dzieli kopiec na dwa drzewa fibonacciego przy użyciu zrzutu 'decrease'.", isCorrect: false }
        ]
    },
    {
        id: 249,
        category: "Grafy: Twierdzenia Grafowe",
        text: "Lemat dotyczący wyznaczania Minimalnego Drzewa Rozpinającego zakłada pojęcie krawędzi 'bezpiecznej' (safe edge). Krawędź ta:",
        options: [
            { text: "Gdy zostanie dodana do częściowo zbudowanego już MST (zgodnego z jakimś pełnym MST), otrzymany zbiór krawędzi nadal jest podzbiorem pewnego pełnego optymalnego MST.", isCorrect: true },
            { text: "Jej waga musi wynosić dokładnie 0 lub 1.", isCorrect: false },
            { text: "Odpowiada najdroższej krawędzi tworzącej cykl na zadanym wykresie dwudzielnym.", isCorrect: false },
            { text: "To krawędź dodawana przez algorytm relaksacji przy ścieżkach skierowanych i negatywnych.", isCorrect: false }
        ]
    },
    {
        id: 250,
        category: "Struktury Danych: Kopce",
        text: "Gdzie musi znajdować się węzeł przechowujący najmniejszą wartość w strukturze Kopca Binamego typu Max (Max-Heap)?",
        options: [
            { text: "Musi on być jednym z liści (elementy tablicy na indeksach od $\\lfloor n/2 \\rfloor + 1$ do $n$).", isCorrect: true },
            { text: "Zawsze na lewym końcu poddrzewa (jak w standardowym BST).", isCorrect: false },
            { text: "Znajduje się on dokładnie na miejscu $n$ (zawsze na samym końcu tablicy).", isCorrect: false },
            { text: "Kopiec typu Max trzyma tylko element maksymalny, mniejsze są ignorowane na etapie tworzenia wskaźników.", isCorrect: false }
        ]
    },
    
    {
        id: 251,
        category: "Struktury Danych: Drzewa AVL",
        text: "W drzewie AVL, po wstawieniu nowego węzła, wykryto zaburzenie równowagi w węźle $x$ (współczynnik balansu $BF = -2$, gdzie $BF = height(left) - height(right)$). Prawe dziecko tego węzła, $y$, ma $BF = 1$. Jaką operację naprawczą należy wykonać?",
        options: [
            { text: "Rotację Right-Left: najpierw pojedynczą rotację w prawo na węźle $y$, a następnie pojedynczą rotację w lewo na węźle $x$.", isCorrect: true },
            { text: "Podwójną rotację Left-Right: najpierw w lewo na $y$, potem w prawo na $x$.", isCorrect: false },
            { text: "Pojedynczą rotację w lewo na węźle $x$.", isCorrect: false },
            { text: "Przekolorowanie węzłów i przerzucenie problemu wyżej w kierunku korzenia.", isCorrect: false }
        ]
    },
    {
        id: 252,
        category: "Struktury Danych: Drzewa AVL vs Czerwono-Czarne",
        text: "Które z poniższych stwierdzeń rzetelnie porównują drzewa AVL z drzewami Czerwono-Czarnymi (RB)?",
        options: [
            { text: "Drzewa AVL są bardziej rygorystycznie zbalansowane (mniejsza wysokość), co zapewnia nieco szybsze wyszukiwanie niż w typowych drzewach RB.", isCorrect: true },
            { text: "Drzewa RB gwarantują mniejszą maksymalną liczbę rotacji potrzebnych do przywrócenia balansu po operacji usunięcia (maksymalnie 3 rotacje).", isCorrect: true },
            { text: "Drzewa RB przechowują wartości kluczy wyłącznie w czarnych liściach, a AVL w każdym węźle.", isCorrect: false },
            { text: "Wstawienie węzła do drzewa AVL w najgorszym przypadku wymaga kaskady $O(\\log n)$ rotacji, podczas gdy w RB wymaga tylko jednej.", isCorrect: false }
        ]
    },
    {
        id: 253,
        category: "Struktury Danych: Drzewa AVL",
        text: "W jakich sytuacjach w drzewie AVL, proces aktualizacji współczynników balansu w górę (w kierunku korzenia) zatrzymuje się na wczesnym etapie po dodaniu węzła (Insert)?",
        options: [
            { text: "Gdy w wyniku aktualizacji od dołu, współczynnik balansu (BF) bieżącego przodka zmieni się na 0.", isCorrect: true },
            { text: "Gdy wykonana zostanie choćby jedna rotacja wyrównująca (ponieważ jedna rotacja wystarczy do zbalansowania przy operacji Insert).", isCorrect: true },
            { text: "Gdy drzewo początkowo posiadało status kopca zupełnego.", isCorrect: false },
            { text: "Gdy wysokość przodka przed i po aktualizacji różni się o dokładnie 2.", isCorrect: false }
        ]
    },
    {
        id: 254,
        category: "Analiza Algorytmów: Koszt Zamortyzowany",
        text: "Jakie poprawne wnioski płyną z analizy zamortyzowanej operacji na dynamicznych tablicach (np. operacji dodawania)?",
        options: [
            { text: "Pesymistyczny koszt samej operacji dodania na koniec wynosi $O(n)$, gdy tablica jest pełna i ulega realokacji.", isCorrect: true },
            { text: "Zamortyzowany koszt jednej operacji dodania, obliczony metodą sumaryczną dla długiej sekwencji, wynosi $O(1)$.", isCorrect: true },
            { text: "W metodzie potencjału, wartość potencjału $\\Phi(D_i)$ zaraz po powiększeniu tablicy powinna być ujemna, aby odbudować dług.", isCorrect: false },
            { text: "W metodzie księgowania każda operacja otrzymuje $n^2$ kredytów, aby zasponsorować sortowanie Merge.", isCorrect: false }
        ]
    },
    {
        id: 255,
        category: "Algorytmy Grafowe: BFS",
        text: "Jakie właściwości prezentuje algorytm BFS i jego struktury pochodne (drzewo BFS) dla grafu G(V,E)?",
        options: [
            { text: "Czas wykonania algorytmu dla reprezentacji w postaci list sąsiedztwa to $\\Theta(|V| + |E|)$.", isCorrect: true },
            { text: "Gwarantuje on odnalezienie najkrótszych ścieżek od źródła (z najmniejszą liczbą krawędzi) dla grafów nieważonych.", isCorrect: true },
            { text: "W drzewie BFS mogą występować krawędzie skierowane w przód z pominięciem poziomu.", isCorrect: false },
            { text: "Kolejka (Queue) w trakcie działania przechowuje węzły zabarwione na CZARNO.", isCorrect: false }
        ]
    },
    {
        id: 256,
        category: "Algorytmy Grafowe: DFS",
        text: "Które twierdzenia charakteryzują relacje pomiędzy czasem odwiedzin (discovery time, $d$) a czasem zakończenia (finish time, $f$) w przeszukiwaniu w głąb (DFS)?",
        options: [
            { text: "Zawsze zachodzi ostra nierówność $d[u] < f[u]$.", isCorrect: true },
            { text: "Zgodnie z tzw. twierdzeniem o nawiasowaniu, przedziały $[d[u], f[u]]$ oraz $[d[v], f[v]]$ są albo rozłączne, albo jeden zawiera się w drugim.", isCorrect: true },
            { text: "Jeśli $v$ jest właściwym potomkiem $u$ w lesie przeszukiwania w głąb, to $d[u] < d[v] < f[v] < f[u]$.", isCorrect: true },
            { text: "Różnica czasu $f[u] - d[u]$ ściśle odzwierciedla liczbę sąsiadów stopnia pierwszego wierzchołka $u$.", isCorrect: false }
        ]
    },
    {
        id: 257,
        category: "Algorytmy Grafowe: Topologiczne Sortowanie",
        text: "Z jakich zasadniczych kroków oraz właściwości składa się procedura sortowania topologicznego zdefiniowana na wykładach?",
        options: [
            { text: "Wywołuje standardowy algorytm DFS dla grafu G w celu ustalenia czasu zakończenia $f[v]$ każdego z wierzchołków.", isCorrect: true },
            { text: "Po przetworzeniu wierzchołka (pokolorowaniu na czarno), wstawia go na przód listy łączonej. Elementy na ostatecznej liście dają porządek topologiczny.", isCorrect: true },
            { text: "Algorytm musi zostać wymuszony na strukturze Grafu Skierowanego Acyklicznego (DAG).", isCorrect: true },
            { text: "Algorytm sprawdza wszystkie krawędzie powrotne relaksując ich najdłuższe wagi na $\\infty$.", isCorrect: false }
        ]
    },
    {
        id: 258,
        category: "Algorytmy Sortowania: Merge Sort",
        text: "Równanie $T(n) = 2T(n/2) + \\Theta(n)$ modeluje sortowanie przez scalanie. Które ze stwierdzeń są prawdziwe odnośnie tej metody i powiązanych z nią kosztów?",
        options: [
            { text: "Według Twierdzenia o Rekurencji Uniwersalnej jej złożoność asymptotyczna wynosi $\\Theta(n \\log n)$.", isCorrect: true },
            { text: "Pomocnicza procedura scalania wymaga dodatkowej pamięci proporcjonalnej do sumarycznej długości scalanych tablic, co daje $\\Theta(n)$ w najgorszym przypadku.", isCorrect: true },
            { text: "Sortowanie przez scalanie jako jedyne posiada logarytmiczną barierę dolną dla algorytmów bez użycia rekursji.", isCorrect: false },
            { text: "W procedurze scalania wstawianie wartownika (sentinel) równego nieskończoności na koniec tablic pomocniczych zapobiega wyjściu indeksów poza ich zakres.", isCorrect: true }
        ]
    },
    {
        id: 259,
        category: "Algorytmy Sortowania: Quicksort",
        text: "Procedura podziału Lomuto i ogólne zachowanie algorytmu Quicksort charakteryzują się tym, że:",
        options: [
            { text: "Procedura ta standardowo dobiera ostatni element rozpatrywanego przedziału $A[r]$ na element rozdzielający (pivot).", isCorrect: true },
            { text: "Czas działania Quicksortu w przypadku optymistycznym, polegającym na ciągłym podziale tablic na bardzo wyrównane połówki wynosi $\\Theta(n \\log n)$.", isCorrect: true },
            { text: "Przypadek pesymistyczny zachodzi m.in., gdy na wejście podawana jest tablica już posortowana malejąco (lub rosnąco), generując czasy rzędu $\\Theta(n^2)$.", isCorrect: true },
            { text: "Algorytm korzysta z buforów w czasie liniowym, eliminując wymóg zapamiętywania danych na stosie.", isCorrect: false }
        ]
    },
    {
        id: 260,
        category: "Statystyki Pozycyjne: Randomized Select",
        text: "Czym charakteryzuje się algorytm `Randomized-Select`, poszukujący $i$-tej statystyki pozycyjnej w oparciu o ideę Quicksortu?",
        options: [
            { text: "Zamiast wywoływać się rekurencyjnie dwukrotnie (dla obu połów), algorytm analizuje tylko tę połowę, do której ranga indeksu przynależy.", isCorrect: true },
            { text: "Średni czas działania algorytmu wyznaczony w rachunku prawdopodobieństwa to $\\Theta(n)$.", isCorrect: true },
            { text: "W najgorszym przypadku algorytm może trwać $O(n^2)$ (zły przypadek ciągłego wyboru skrajnych pivotów).", isCorrect: true },
            { text: "Wykorzystuje wbudowane funkcje relaksacji wektorów, przez co nie może być użyty bez struktur grafowych.", isCorrect: false }
        ]
    },
    {
        id: 261,
        category: "Statystyki Pozycyjne: Algorytm Deterministyczny (Magiczne Piątki)",
        text: "Z jakich podstawowych kroków składa się algorytm wyznaczania selekcji w najgorszym, pesymistycznym czasie liniowym $O(n)$?",
        options: [
            { text: "Podział wszystkich z $n$ elementów na grupy po 5 elementów.", isCorrect: true },
            { text: "Znalezienie median każdej podgrupy i następnie, poprzez uogólnienie rekurencyjne, wybranie 'mediany ze wszystkich wyznaczonych median'.", isCorrect: true },
            { text: "Gwarantuje, że podział tablicy będzie proporcjonalny, przynajmniej dla $\\approx \\frac{3}{10}n$ z jednej ze stron, wymuszając skracanie.", isCorrect: true },
            { text: "Zignorowanie pierwszych i ostatnich pięciu elementów w celu wyeliminowania wartości skrajnych.", isCorrect: false }
        ]
    },
    {
        id: 262,
        category: "Algorytmy Grafowe: Kruskal vs Prim",
        text: "Obserwacje strukturalne i implementacyjne dla algorytmów szukających MST ujawniają, że:",
        options: [
            { text: "Algorytm Kruskala zachłannie buduje tzw. las poprzez dokładanie nie-cyklicznych krawędzi, wykorzystując kolejkę i strukturę Zbiorów Rozłącznych (Disjoint-Sets).", isCorrect: true },
            { text: "Algorytm Prima w swej strukturze i logice bardzo przypomina Algorytm Dijkstry; relaksując wagi łączące nieodwiedzone węzły z powiększającym się drzewem.", isCorrect: true },
            { text: "Kruskal jest dużo szybszy asymptotycznie od Prima dla niezwykle gęstych grafów reprezentowanych w postaci macierzy.", isCorrect: false },
            { text: "Oba algorytmy ulegają bezpowrotnej awarii jeśli wagi krawędzi w grafie powtarzają się.", isCorrect: false }
        ]
    },
    {
        id: 263,
        category: "Algorytmy Grafowe: Bellman-Ford",
        text: "Jakie główne cechy wyróżniają algorytm Bellmana-Forda na tle pozostałych metod znajdowania najkrótszej ścieżki (Dijkstry i DAG Shortest Paths)?",
        options: [
            { text: "Może obsłużyć grafy o dowolnych (także ujemnych) wagach, tak długo, dopóki z docelowego źródła nie jest osiągalny jakikolwiek cykl ujemny.", isCorrect: true },
            { text: "Oparty jest na $|V|-1$ iteracyjnym relaksowaniu całego dostępnego w sieci zestawu krawędzi.", isCorrect: true },
            { text: "Ostatnia nadmiarowa pętla pozwala na programistyczne zgłoszenie wartości `False` wykrywając cykl ujemny.", isCorrect: true },
            { text: "Bazuje on ściśle na przeszukiwaniu A* oraz heurystyce ujemnego logarytmu.", isCorrect: false }
        ]
    },
    {
        id: 264,
        category: "Algorytmy Grafowe: Dijkstra",
        text: "W oparciu o wykłady z sylabusa, co stanowi fundament budowy i działania algorytmu Dijkstry?",
        options: [
            { text: "Wymaga istnienia grafu, którego wagi krawędzi nie są ujemne, ponieważ w przypadku ściągania wartości minimalnej ze zbioru, decyduje, iż absolutnie już krótsza droga do pobranego wierzchołka znaleziona nie będzie.", isCorrect: true },
            { text: "Najlepszy teoretyczny czas wykonania algorytmu dla reprezentacji w listach i przy użyciu kopca Fibonacciego wynosi $O(|E| + |V| \\log |V|)$.", isCorrect: true },
            { text: "Stosuje on heurystykę i analizę przepustowości rezydualnej w celu przyśpieszenia decyzji o cięciu minimalnym.", isCorrect: false },
            { text: "Algorytm musi wykorzystywać strukturę Union-Find w każdym wywołaniu `Relax(u,v,w)`.", isCorrect: false }
        ]
    },
    {
        id: 265,
        category: "Algorytmy Grafowe: Floyd-Warshall",
        text: "Jakie są strukturalne założenia w implementacji algorytmu Floyda-Warshalla?",
        options: [
            { text: "Działa dzięki procedurze Programowania Dynamicznego z trójwymiarową zależnością wyliczającą macierze dla coraz szerszych zbiorów wierzchołków pośrednich od $\\{1\\}$ do $\\{1..k\\}$.", isCorrect: true },
            { text: "W złożoności $\\Theta(V^3)$ wylicza minimalne drogi między każdą parą wierzchołków i wykrywa ujemne cykle z pomocą ujemnych symboli pozostawionych na przekątnej.", isCorrect: true },
            { text: "Składa się z wywołań wewnątrz pętli $V$-krotnej odpalającej algorytm BFS.", isCorrect: false },
            { text: "Znajduje rozwiązanie dla optymalizacji komiwojażera przy narzuconym czasie wielomianowym.", isCorrect: false }
        ]
    },
    {
        id: 266,
        category: "Sieci Przepływowe: Maksymalny przepływ i zjawiska",
        text: "Co wynika z definicji na temat przepływu i sieci residualnej wejściowego grafu z jednym źródłem $s$ i ujściem $t$?",
        options: [
            { text: "W sieci residualnej $G_f$ pojemność na dowolnej krawędzi skierowanej z przepływem zostaje zmniejszona $c_f(u, v) = c(u, v) - f(u, v)$.", isCorrect: true },
            { text: "Sieć residualna tworzy dodatkowe krawędzie o przeciwnym zwrocie (anti-parallel edges) nadając im wagę proporcjonalną do zepchniętego prądu wejściowego: $c_f(v, u) = f(u, v)$.", isCorrect: true },
            { text: "Twierdzenie o maksymalnym przepływie ustala ostateczną tezę o jego równości do minimalnego wymaganego przekroju tnącego sieć.", isCorrect: true },
            { text: "Przepustowości w grafie dopuszczają w każdym przypadku wejście z ujemnym przepływem początkowym do źródła.", isCorrect: false }
        ]
    },
    {
        id: 267,
        category: "Maksymalne skojarzenia (Bipartite Matching)",
        text: "Problem minimalnego pokrycia oraz wyznaczania maksymalnych skojarzeń na nieskierowanych grafach dwudzielnych można łatwo mapować do jakiego mechanizmu?",
        options: [
            { text: "Do mechanizmu sprowadzanego pod sieć przepływową Forda-Fulkersona, po uprzednim sztucznym doklejeniu wierzchołków 'super-źródła' i 'super-ujścia'.", isCorrect: true },
            { text: "Gwarancja optymalnego rozwiązania w takim przypadku wynika z faktu integracyjnego powiązanego z pojemnościami krawędzi opartymi wyłącznie na wartości logicznej 1.", isCorrect: true },
            { text: "Dopasowania realizuje się wymuszając zliczanie wierzchołków bez wskaźników przez algorytm Floyda-Warshalla.", isCorrect: false },
            { text: "Wykorzystywania tylko struktury skip list z randomizowanymi podwójnymi szansami zablokowania.", isCorrect: false }
        ]
    },
    {
        id: 268,
        category: "Struktury Danych: Budowanie Kopca",
        text: "Biorąc pod uwagę operację `Build-Max-Heap(A)` i rygor asymptotyczny:",
        options: [
            { text: "Złożoność zmontowania kopca od dołu do góry w pętli od $\\lfloor n/2 \\rfloor$ do $1$ wynosi zaledwie $\\Theta(n)$.", isCorrect: true },
            { text: "Spowodowane jest to ujęciem w szeregu matematycznym dla sumy kosztów węzłów (większość z nich znajduje się przy dnie, a pchnięcia `Heapify` trwają bardzo krótko).", isCorrect: true },
            { text: "Oprócz procedury oddolnej dozwolone jest utworzenie kopca wrzucając n razy procedurę węzła w czasie $O(n^2)$.", isCorrect: false },
            { text: "Budowa kopca wymusza w czasie O(1) stałą inicjalizację przy użyciu tablic wielowymiarowych.", isCorrect: false }
        ]
    },
    {
        id: 269,
        category: "Struktury Danych: Hash Tables",
        text: "Jakie właściwości i negatywne efekty są znane podczas implementacji klasycznej Tablicy Haszującej w trybie adresowania otwartego (open addressing)?",
        options: [
            { text: "Adresowanie liniowe skutkuje drastycznie obniżeniem wydajności poprzez indukcję tzw. pierwotnego grupowania (primary clustering), scalających kolizje w pojedyncze, ciągłe bloki zapytań.", isCorrect: true },
            { text: "W celu minimalizacji tych skutków preferuje się użycie tzw. 'double hashing' z dwiema asynchronicznymi i silnie zrelaksowanymi funkcjami bazowymi.", isCorrect: true },
            { text: "Operacja kasowania $HASH-DELETE$ wymaga podstawienia specjalnego markera 'DELETED', bez którego następne szukanie mogłoby fałszywie stwierdzić pustość komórki.", isCorrect: true },
            { text: "Adresowanie otwarte wymusza budowanie i scalanie list łączonych z wykorzystaniem tablic list.", isCorrect: false }
        ]
    },
    {
        id: 270,
        category: "Algorytmy Tekstowe: KMP i Automaty",
        text: "Czym objawia się praca algorytmu KMP i optymalizacja Automatem?",
        options: [
            { text: "Skupia się on na wygenerowaniu uprzedniej tablicy funkcji przejść (tablicy prefikso-sufiksowej $\\pi$).", isCorrect: true },
            { text: "Jego bezwzględny, liniowy czas $\\Theta(m+n)$ na tle rzędu $O(mn)$ to efekt wykorzystania analizy zamortyzowanej przy zapamiętywaniu poprawnie ocenionych wskaźników tekstowych.", isCorrect: true },
            { text: "Wyraźnie pomija wymóg skanowania z wykorzystaniem zduplikowanego wzorca poprzez heurystyki z prawostronnego sufitu.", isCorrect: false },
            { text: "Funkcja modyfikacji podciągu zwraca cykle Eulera jako czas poszukiwań i odczytu dla stanów.", isCorrect: false }
        ]
    },
    {
        id: 271,
        category: "Algorytmy Tekstowe: Boyer-Moore",
        text: "W jaki sposób Boyer-Moore odgrywa szczególną zaletę implementacyjną względem naiwnego algorytmu i metody KMP?",
        options: [
            { text: "Zestawia on znaki począwszy od ostatniej, prawej krawędzi wzorca przemieszczając się prosto ku części lewej.", isCorrect: true },
            { text: "Pozwala na drastycznie długie skoki w tekście opierając się o wylosowaną tablicę dla heurystyk złego znaku oraz dla heurystyki zgodności poprawnego sufiksu.", isCorrect: true },
            { text: "Algorytm opiera się o sprawdzanie tzw. Rolling Hash korzystającego z formuły algebraicznej Hornera i potęg wymiernych.", isCorrect: false },
            { text: "Nie ma w nim opcji wystąpienia pesymistycznego przypadku $O(n^2)$.", isCorrect: false }
        ]
    },
    {
        id: 272,
        category: "Struktury Danych: Drzewa Przedziałowe i Dynamiczne Statystyki",
        text: "Co wynika z zasady utrzymania atrybutów dynamicznych na operacjach drzew czerowno-czarnych i AVL w rozszerzonych strukturach danych?",
        options: [
            { text: "Podczas rotacji lewej bądź prawej re-wyliczenie parametrów specyficznych `size` czy `max` na węzłach obracanych zamyka się wyłącznie w weryfikacji $\\Theta(1)$.", isCorrect: true },
            { text: "Dla zapytań o przecięcia `Interval-Search(T, i)` używa się informacji zakodowanej na samej górze poddrzew – jeśli lewy brat kryje węzły z `max` mniejszym niż `low` szukanego przedziału ignoruje on wchodzenie głębiej.", isCorrect: true },
            { text: "Węzeł ulega wymazaniu do wartości początkowej, dopóki stos nie wejdzie z danymi do wbudowanej listy wiązanej.", isCorrect: false },
            { text: "Każda dynamiczna statystyka wymaga ponownego przechodzenia po korzeniu in-order z każdym przetasowaniem w drzewie.", isCorrect: false }
        ]
    },
    {
        id: 273,
        category: "Drzewo Czerwono-Czarne (RB): Kolory i zasady",
        text: "Właściwości RB-Tree zgodnie z podręcznikiem narzucają bezwzględnie:",
        options: [
            { text: "Zarówno liście typu `NIL`, jak i strukturalny korzeń drzewa są klasyfikowane jako zabarwione na czarno.", isCorrect: true },
            { text: "Czerwone węzły nie mogą mieć jakiegokolwiek sąsiadującego pionowo (ojciec lub bezpośredni potomek) czerwonego powiązania.", isCorrect: true },
            { text: "Liczba pokonywanych czarnych wierzchołków na wszystkich zbiegających drogach w dół od węzła do skrajnych liści `NIL` musi zliczać tę samą ich ilość, dając tzw. Czarną Wysokość (black-height).", isCorrect: true },
            { text: "Długość najdłuższej drogi z korzenia będzie dokładnie wyższa niź dwukrotność sumy wysokości najmniejszej z nich.", isCorrect: false }
        ]
    },
    {
        id: 274,
        category: "Listy Przeskakiwania (Skip Lists)",
        text: "Idea, parametry i działanie list z przeskokami:",
        options: [
            { text: "Oparte są na układaniu warstwowym z wykorzystaniem rzutowania monet (lub pseudolosowości) dając poszczególnym węzłom mniejszą frakcję referencji docierającej coraz to wyżej.", isCorrect: true },
            { text: "Ich spodziewany asymptotyczny czas poszukiwania dla węzła równoważy zapytaniom i rygorowi z drzew silnie balansowanych dając średnie zyski poziomu $O(\\log n)$.", isCorrect: true },
            { text: "Element z najwyższą referencją zajmuje najwyższy poziom do góry i nie pojawia się w niższych poziomach.", isCorrect: false },
            { text: "Używane do graficznego modelowania z wykorzystaniem zderzeń zamiatania metodą Sweep Line.", isCorrect: false }
        ]
    },
    {
        id: 275,
        category: "Sortowanie: Klasa w czasie liniowym",
        text: "Wymienione algorytmy sortowań nie wykorzystujące logiki porównania ze sobą danych element po elemencie, podlegają regułom:",
        options: [
            { text: "Counting Sort opiera procedurę o stałe i skończone uniwersum kluczy o długości $k$, licząc liczbę elementów na pozycji mniejszych/równych od bieżącego wpisu.", isCorrect: true },
            { text: "W sortowaniu Radix wymusza się z racji na rzędowość użycia po drodze innego wewnętrznego algorytmu - a sam sort musi obowiązkowo spełniać rolę zachowania oryginalnej stabilności dla kluczy dubli.", isCorrect: true },
            { text: "Sortowanie Kubełkowe rozczłonkowuje wartości wedle założenia o dystrybucji na proste interwały dziesiątkowe zachowując stabilność poprzez zrobienie sortowań najczęściej z wstawianiem z osobna na listach wewnątrzkubełkowych.", isCorrect: true },
            { text: "Bucket sort działa ekstremalnie szybko w przypadku gęstym po skomasowaniu całej partii do wyłącznie najniższego z interwałów kubełkowych z pominięciem reszty.", isCorrect: false }
        ]
    },
    {
        id: 276,
        category: "Kompresja Danych: Entropia",
        text: "Miara Entropii i związane z nią procedury algorytmiczne w teorii informacji ujawniają, że:",
        options: [
            { text: "Zgodnie z ujęciem Shannona, entropia rygorystycznie oszacowuje bezwzględną dolną granicę dla oczekiwanej ilości bitów na jeden spakowany symbol.", isCorrect: true },
            { text: "Metoda drzew i kodu Huffmana realizuje zadanie budując zachłannie kopiec (często priorytetowy typ min) na podstawie podanych rozkładów gęstości/częstotliwości występowania elementu w bloku tekstu.", isCorrect: true },
            { text: "Algorytm Huffmana produkuje zdekodowanie kodów prefiksowych blokując przypadek, że dowolny krótszy ciąg z mapy dekodera będzie dublował i przerywał interpretację na sufiksy innych wyrazów.", isCorrect: true },
            { text: "Algorytm słownikowy LZW zakłada brak zapamiętywania wcześniej czytanych stanów w celach uniknięcia przepełnienia tablic dynamicznych.", isCorrect: false }
        ]
    },
    {
        id: 277,
        category: "Algorytmy Równoległe (PRAM): Taksonomia Flynn’a i systemy wielordzeniowe",
        text: "Podstawy architektury układów równoległych ujawniają, że modele te funkcjonują z zastrzeżeniami typu:",
        options: [
            { text: "Architektura SIMD działa na wielu oddzielnych układach czytając ten sam i jednolity strumień danych wysyłający instrukcje na równoległe rzesze w czasie stałym.", isCorrect: true },
            { text: "Model PRAM nakreślony jako `EREW` jest wyjątkowo powściągliwy pod względem udostępnień, zakazując ubiegania się zarówno do zbieżnego czytania jak i pisanina w komórkę.", isCorrect: true },
            { text: "Algorytm z wykorzystaniem tablic po przedziałach na redukcji potęgi z pary ułatwia zbilansowanie i logarytmiczne obliczenie chociażby wyników poszukiwań maksimum.", isCorrect: true },
            { text: "Klasa modelu ERCW dopuszcza zawsze na wyłączny jednorodny rygor w pisaniu bez zwracania błędu kolizji w buforach na linii szynowej.", isCorrect: false }
        ]
    },
    {
        id: 278,
        category: "Algorytmy Równoległe: O(n) do logarytmów",
        text: "Ustalanie równoległych wskaźników i rangi za pomocą modelu PRAM:",
        options: [
            { text: "Mechanika skracania lub 'przeskakiwania wskaźników' na rozłożonych listach działa w czasach logarytmicznych pozwalając ustalić w odseparowanych i niezależnych operacjach sumaryczną rangę z końcem układu na powrót.", isCorrect: true },
            { text: "Struktury te silnie korzystają z rozwijalnych sum prefiksowych z drzew binarnych używając zagnieżdżonych sum od liści pnąc się po gałęzi do roota.", isCorrect: true },
            { text: "Ograniczeniem sprzętowym wymuszającym odrębne ujęcia jest zakaz asocjacji modelu CREW z rzutowaniami równoległymi do zapisu dla wielocyklicznych wektorów instrukcji.", isCorrect: true },
            { text: "Model CRCW zawsze generuje wyjątek blokujący i niszczący stany jeżeli użyje mechanizmu COMMON dla uzgodnienia zapisów do wyłącznego dostępu.", isCorrect: false }
        ]
    },
    {
        id: 279,
        category: "Algorytmy Geometryczne: Przecinanie Odcinków",
        text: "Które składowe algorytmów z domeny analizy na wektorach i zbiorach punktów stosuje się przy detekcji przecięć i szukania ich położeń na płaszczyznach?",
        options: [
            { text: "Obliczanie ujemnego bądź dodatniego iloczynu wektorowego (cross-product/wyznacznik) na pozycjach wektorów tworzonych z trzech testowanych punktów ułatwia rozstrzygnięcie, z której strony osi prostej na skręcie leży wierzchołek docelowy.", isCorrect: true },
            { text: "Test wzajemnego przyrównywania i szukania przecięć redukuje się poprzez analizę dla dwóch rozpatrywanych odcinków polegającą na udowodnieniu ich rozciągłości i leżenia po stronach obustronnie naprzemiennych względem przedłużonych linii zawierających te ucięcia.", isCorrect: true },
            { text: "Metoda Sweep-line pozwala na przyspieszone, operacyjne zebranie incydencji opierając wirtualną i podążającą po zdarzeniach Miotłę o zbiór na Kolejce Priorytetowej względem zmian położenia na osi poziomej X.", isCorrect: true },
            { text: "Metoda \"Zamiatania Miotłą\" jest nieskończenie dokładna przez co nie stwarza potrzeby obsługi zdarzeń dla drzew BST pod osie Y i redukuje do sortowania z czasem zaledwie logarytmicznym całego bloku w $O(\\log n)$.", isCorrect: false }
        ]
    },
    {
        id: 280,
        category: "Algorytmy Geometryczne: Otoczki i Najbliższe Punkty",
        text: "Koncepcje przy ustalaniu bliskich par na płaskim układzie oraz ich obrysach otoczki charakteryzują się takimi zagadnieniami jak:",
        options: [
            { text: "Zastosowanie procedury i podejścia z algorytmu o podziale i zwyciężaniu na zredukowanych pionowych połówkach okna pozwala na obniżenie czasu pesymistycznego z gęstego algorytmu siłowego ($O(n^2)$) pod kątem znalezienia najbliższych dwóch ze zbioru pod $O(n \\log n)$.", isCorrect: true },
            { text: "W procedurze wyboru pod szukanie par, wystarczy przeanalizowanie do $O(7)$ punktów okalających blok testowy za wylaną połową dla krawędzi dzielącej.", isCorrect: true },
            { text: "Proces wyszukiwania algorytmu Grahama na otoczce wymusza w celu inicjalizacyjnym zlokalizowania najpierw najmniejszej współrzędnej względem dołu i ewentualnych krawędzi bocznych jako niezmiennika układu dla $P_0$.", isCorrect: true },
            { text: "Sortowanie dla osi kątowej w systemie biegunowym przebiega najszybciej na zablokowaniu testów dla iloczynu skalarnego.", isCorrect: false }
        ]
    },

    {
        id: 321,
        category: "Drzewa AVL: Rotacje",
        text: "Przy rotacji RL (Right-Left) na węźle $z$, którego prawym dzieckiem jest $y$, a lewym dzieckiem $y$ jest $x$. Jak wygląda struktura po wykonaniu tej podwójnej rotacji?",
        options: [
            { text: "Węzeł $x$ staje się nowym korzeniem tego poddrzewa. Węzeł $z$ staje się jego lewym dzieckiem, a węzeł $y$ prawym.", isCorrect: true },
            { text: "Węzeł $y$ wchodzi na miejsce $z$, $x$ pozostaje na swoim miejscu, a $z$ ląduje jako lewy liść w $y$.", isCorrect: false },
            { text: "Drzewo AVL dokonuje przekolorowania bez zmian strukturalnych.", isCorrect: false },
            { text: "Wszystkie trzy węzły łączą się w węzeł potrójny (B-Tree) w celu zachowania balansu.", isCorrect: false }
        ]
    },
    {
        id: 322,
        category: "Drzewa AVL: Złożoność Delete",
        text: "Dlaczego w operacji usunięcia (Delete) z drzewa AVL w najgorszym przypadku liczba wykonanych rotacji w górę drogi do korzenia wynosi $O(\\log n)$, a nie stałą?",
        options: [
            { text: "Ponieważ rotacja naprawiająca jedno poddrzewo może zmniejszyć całkowitą wysokość tego poddrzewa, co z kolei może zaburzyć współczynnik balansu w węźle nadrzędnym wyżej.", isCorrect: true },
            { text: "Z uwagi na konieczność przeliczania mediany drzewa na każdym z węzłów.", isCorrect: false },
            { text: "W drzewach AVL nigdy nie wykonuje się więcej niż 2 rotacji nawet przy usuwaniu, to mit.", isCorrect: false },
            { text: "Ponieważ po usunięciu trzeba wywołać procedurę Heapify na całej lewej gałęzi.", isCorrect: false }
        ]
    },
    {
        id: 323,
        category: "Drzewa AVL: Minimalna Liczba Węzłów",
        text: "Jeśli drzewo AVL ma wysokość $h=4$ (przyjmując korzeń jako poziom 1 i $h=1$ dla 1 węzła; wzór $N_h = N_{h-1} + N_{h-2} + 1$), to ile wynosi absolutne minimum węzłów dla takiego drzewa?",
        options: [
            { text: "7 węzłów.", isCorrect: true },
            { text: "4 węzły.", isCorrect: false },
            { text: "15 węzłów.", isCorrect: false },
            { text: "16 węzłów.", isCorrect: false }
        ]
    },
    {
        id: 324,
        category: "Drzewa AVL: Rotacja Pojedyncza a Podwójna",
        text: "Jakie warunki w drzewie AVL decydują o użyciu rotacji pojedynczej LL zamiast rotacji podwójnej LR przy zaburzeniu BF=2 w węźle A?",
        options: [
            { text: "Jeśli lewe dziecko węzła A ma współczynnik balansu $\\ge 0$ (wysokość jego lewego poddrzewa jest $\\ge$ wysokości prawego), stosujemy rotację pojedynczą LL.", isCorrect: true },
            { text: "O rodzaju rotacji decyduje wyłącznie losowy czynnik, obie przywracają poprawny stan.", isCorrect: false },
            { text: "Rotację podwójną stosuje się wyłącznie podczas operacji kasowania, LL do wstawiania.", isCorrect: false },
            { text: "Jeśli lewe dziecko węzła A ma kolor Czerwony.", isCorrect: false }
        ]
    },
    {
        id: 325,
        category: "Drzewa Czerwono-Czarne: Redukcja RB do AVL",
        text: "Czy z perspektywy definicji matematycznej każde poprawne drzewo AVL o pewnej ilości elementów może zostać poprawnie pokolorowane, by spełniać warunki drzewa Czerwono-Czarnego?",
        options: [
            { text: "Tak, struktura AVL wymusza większy (bardziej surowy) stopień zbalansowania, więc zawsze istnieje poprawne przypisanie kolorów robiące z niego drzewo RB.", isCorrect: true },
            { text: "Nie, drzewa RB wymagają by pewne konkretne ścieżki były dwukrotnie dłuższe, co AVL zawsze uniemożliwia.", isCorrect: false },
            { text: "Tak, pod warunkiem, że wszystkie węzły zabarwimy na czerwono.", isCorrect: false },
            { text: "Nie, AVL nie wspiera koncepcji NIL jako dodatkowych liści.", isCorrect: false }
        ]
    },
    {
        id: 326,
        category: "Drzewa Czerwono-Czarne: Insert",
        text: "Podczas wstawiania elementu do drzewa RB (czerwony $z$), co dzieje się, gdy jego rodzic jest czerwony, a wujek jest CZARNY, a wstawiony element tworzy z rodzicem i dziadkiem 'prostą linię' (np. jest lewym dzieckiem lewego dziecka)?",
        options: [
            { text: "Rodzic staje się CZARNY, dziadek CZERWONY i wykonuje się pojedynczą rotację w prawo na dziadku (Przypadek 3).", isCorrect: true },
            { text: "Rodzic i wujek stają się CZARNI, dziadek CZERWONY i przesuwa się sprawdzanie na dziadka.", isCorrect: false },
            { text: "Obywa się podwójna rotacja w lewo z udziałem wujka.", isCorrect: false },
            { text: "Algorytm musi wykasować węzeł, bo wstawienie zagraża integralności czarnej wysokości.", isCorrect: false }
        ]
    },
    {
        id: 327,
        category: "Drzewa Przedziałowe (Interval Trees)",
        text: "Gdy operacja `Interval-Search` przechodzi w prawe poddrzewo podczas szukania pokrywającego się przedziału $i$, jaki matematyczny powód zmusza ją do tej decyzji?",
        options: [
            { text: "Węzeł ma puste lewe poddrzewo LUB maksymalna wartość $max$ w lewym poddrzewie jest ściśle mniejsza niż dolny kraniec szukanego przedziału ($left.max < i.low$).", isCorrect: true },
            { text: "Pole `max` dla całego poddrzewa przekroczyło limit pamięci dla typu Int.", isCorrect: false },
            { text: "Algorytm musi odwiedzić wszystkie prawe krawędzie w celu zliczenia Rangi (OS-Rank).", isCorrect: false },
            { text: "Lewe poddrzewo zostało zajęte przez algorytm rotacji.", isCorrect: false }
        ]
    },

    {
        id: 328,
        category: "Insertion Sort (Pseudokod)",
        text: "W klasycznym pseudokodzie Cormena dla Insertion Sort (dla tablicy 1-indeksowanej), jaki warunek w pętli `while` kontroluje przesuwanie elementów w posortowanej już części?",
        options: [
            { text: "`while i > 0 and A[i] > key`", isCorrect: true },
            { text: "`while i >= 0 and A[i] == key`", isCorrect: false },
            { text: "`while i < n and A[i] < key`", isCorrect: false },
            { text: "`while i > 1 and A[i] <= key`", isCorrect: false }
        ]
    },
    {
        id: 329,
        category: "Merge Sort (Złożoność)",
        text: "Dlaczego procedura `Merge` w Merge Sort uchodzi za nie dającą się łatwo zaadaptować do optymalnego i szybkiego działania w miejscu ($O(1)$ dodatkowej pamięci)?",
        options: [
            { text: "Ponieważ przesuwanie bloków danych podczas przeplatania elementów powodowałoby liczne wstawiania na środku tablicy, drastycznie podnosząc czas działania do $O(n^2)$ w najgorszym scenariuszu.", isCorrect: true },
            { text: "Ponieważ wymaga ona użycia kolejek priorytetowych do utrzymywania kopca w czasie działania.", isCorrect: false },
            { text: "Dlatego, że dzielenie wektora na pół generuje zawsze liczby nieparzyste.", isCorrect: false },
            { text: "Nie jest to prawda; procedura w miejscu ma udowodniony pesymistyczny czas działania $\\Theta(n)$ w wariancie Hoare'a.", isCorrect: false }
        ]
    },
    {
        id: 330,
        category: "Quicksort (Lomuto vs Hoare)",
        text: "Jaka jest zasadnicza różnica w punkcie podziału zwracanym przez procedurę Partition w wersji Lomuto względem wersji Hoare'a?",
        options: [
            { text: "W wersji Lomuto element osiowy (pivot) trafia dokładnie na swoje ostateczne miejsce i rzadko dołącza do dalszych rekurencji. W Hoare'a dzieli tablicę z gwarancją `A[p..j] <= A[j+1..r]`, ale sam pivot nie musi być na ostatecznej pozycji.", isCorrect: true },
            { text: "Lomuto jest znacznie szybsze asymptotycznie i ma barierę $\\Theta(n \\log n)$, a Hoare to algorytm wolny z barierą $O(n^2)$.", isCorrect: false },
            { text: "Obie wersje są identyczne matematycznie pod kątem przypisywania indeksów.", isCorrect: false },
            { text: "Hoare wymaga zewnętrznej tablicy do zbuforowania obu list wyników (jak Counting Sort).", isCorrect: false }
        ]
    },
    {
        id: 331,
        category: "Twierdzenie o Rekurencji (Master Theorem)",
        text: "Jeśli równanie rekurencyjne wynosi $T(n) = 3T(n/3) + n \\log n$, w jaki z przypadków z Master Theorem się wpisuje?",
        options: [
            { text: "Nie wpisuje się gładko w standardowe trzy proste przypadki, ale rozszerzenie do Przypadku 2 z polilogarytmicznym mnożnikiem mówi, że wynik to $\\Theta(n \\log^2 n)$.", isCorrect: true },
            { text: "To przypadek 1: funkcja dominuje w podziale na liściach z wynikiem $\\Theta(n^3)$.", isCorrect: false },
            { text: "To przypadek 3: wynik to $\\Theta(n \\log n)$ z uwagi na warunek regularności.", isCorrect: false },
            { text: "Algorytm ulegnie błędom dzielenia przez zera logarytmu.", isCorrect: false }
        ]
    },
    {
        id: 332,
        category: "Heapsort i procedura BuildHeap",
        text: "Dlaczego główna pętla w `Build-Max-Heap` iteruje od $\\lfloor length/2 \\rfloor$ w dół do 1?",
        options: [
            { text: "Ponieważ wszystkie elementy z indeksami powyżej $\\lfloor length/2 \\rfloor$ to liście, a liść z definicji jest już poprawnym 1-elementowym kopcem. Zatem naprawę można zacząć dopiero od pierwszych rodziców na spodzie.", isCorrect: true },
            { text: "Z uwagi na stabilność sortowania odwróconego.", isCorrect: false },
            { text: "Gdyż `Heapify` psuje korzenie wyższe, więc naprawa od góry zepsułaby logarytm na dole.", isCorrect: false },
            { text: "Z uwagi na wskaźnik do pierwszego wolnego miejsca tablicy dla węzła ucieczkowego.", isCorrect: false }
        ]
    },

    {
        id: 333,
        category: "Haszowanie Otwarte: Adresowanie Kwadratowe",
        text: "Które zdanie opisuje wadę adresowania kwadratowego $h(k,i) = (h'(k) + c_1 i + c_2 i^2) \\bmod m$?",
        options: [
            { text: "Generuje ono tzw. wtórne grupowanie (secondary clustering) – jeśli dwa klucze mają ten sam hash początkowy, wygenerują identyczny ciąg próbkowania i wejdą ze sobą w powtarzające się kolizje.", isCorrect: true },
            { text: "Współczynniki $c_1$ i $c_2$ wymagają ogromnej pojemności obliczeniowej z użyciem jednostki FPU.", isCorrect: false },
            { text: "Działa dobrze tylko z użyciem wielkich liter w stringach.", isCorrect: false },
            { text: "Gwarantuje, że przeglądnięte zostanie zawsze mniej niż $10\\%$ pustych slotów tablicy.", isCorrect: false }
        ]
    },
    {
        id: 334,
        category: "Haszowanie Uniwersalne",
        text: "Czym jest 'Haszowanie Uniwersalne' zdefiniowane na wykładach z AiSD?",
        options: [
            { text: "Sposobem na unikanie złośliwych danych polegającym na losowym wyborze samej funkcji haszującej ze specjalnej rodziny funkcji $\\mathcal{H}$ podczas inicjalizacji, wymuszającym oczekiwaną niską kolizję bez względu na atak.", isCorrect: true },
            { text: "Funkcją haszującą generującą ten sam układ dla każdego węzła na każdym systemie PRAM.", isCorrect: false },
            { text: "Cykliczną zmianą wielkości $m$ tablicy za pomocą złotego podziału.", isCorrect: false },
            { text: "Kluczem kryptograficznym używanym podczas drzew decyzyjnych w LZW.", isCorrect: false }
        ]
    },

    {
        id: 335,
        category: "Grafy: DFS (Klasyfikacja Krawędzi)",
        text: "Jeśli podczas przeszukiwania w głąb (DFS) przetwarzając wierzchołek $u$ natrafimy na krawędź $(u,v)$, gdzie $v$ ma aktualnie kolor SZARY (GRAY), co to oznacza i jak nazywa się ta krawędź?",
        options: [
            { text: "Oznacza to, że $v$ to przodek $u$, a $(u,v)$ to krawędź powrotna (back edge), co dowodzi istnienia cyklu w grafie skierowanym.", isCorrect: true },
            { text: "Jest to krawędź w przód (forward edge) idąca do potomka wyznaczonego już w innej odnodze.", isCorrect: false },
            { text: "Jest to krawędź poprzeczna (cross edge) uciekająca między drzewami w lesie DFS.", isCorrect: false },
            { text: "Oznacza to błąd w algorytmie, szare krawędzie muszą być odłożone na stos FIFO.", isCorrect: false }
        ]
    },
    {
        id: 336,
        category: "Grafy: BFS i Poprawność",
        text: "Dlaczego dowód na odnajdowanie najkrótszych dróg przez algorytm BFS w grafie nieważonym opiera się mocno na strukturze Kolejki (Queue FIFO)?",
        options: [
            { text: "Ponieważ kolejka FIFO gwarantuje, że najpierw całkowicie odkryte i dodane zostaną wierzchołki w odległości $k$ od źródła, a dopiero po wyczerpaniu ich z kolejki przetworzone będą wierzchołki w odległości $k+1$.", isCorrect: true },
            { text: "Ponieważ LIFO i pop z końca przyspieszają zbijanie wierzchołków na stertę priorytetową.", isCorrect: false },
            { text: "Struktura kolejki automatycznie przypisuje krawędziom wagi ujemne w przypadku wykrycia cyklu.", isCorrect: false },
            { text: "Dowód nie opiera się na FIFO; można go zrealizować także używając Stosu (DFS) do znalezienia najkrótszej ścieżki.", isCorrect: false }
        ]
    },
    {
        id: 337,
        category: "Grafy: Dijkstry Własności i Czas",
        text: "Jeśli algorytm Dijkstry byłby wprawiony w ruch na grafie o samej gęstej macierzy, z czasem wyciągania minimum realizowanym naiwnym przeszukaniem nieuporządkowanej tablicy (czas $O(V)$), jaka wyniosłaby sumaryczna złożoność i z czym by konkurowała?",
        options: [
            { text: "Wyniosłaby $O(V^2)$ i dla niezwykle gęstych grafów (gdzie $E \\approx V^2$) stanowi bardzo wydajne, często lepsze podejście ze względu na małe stałe i brak narzutu zarządzania strukturami kopca.", isCorrect: true },
            { text: "Wyniosłaby $O(V \\log V)$ ale przegrała z użyciem drzew AVL.", isCorrect: false },
            { text: "Odrzuciłaby wektor, działając w czasie $\\Theta(n^3)$ jak algorytm Floyda.", isCorrect: false },
            { text: "Z uwagi na procedurę BFS zapętliłaby relaksację i wyniosłaby $O(\\infty)$.", isCorrect: false }
        ]
    },
    {
        id: 338,
        category: "Grafy: Bellman-Ford po wyczerpaniu",
        text: "Dlaczego po $V-1$ iteracjach w algorytmie Bellmana-Forda, ewentualne kolejne udane relaksacje potwierdzają, że od źródła osiągalny jest ujemny cykl?",
        options: [
            { text: "Ponieważ każda ścieżka prosta (bez cykli) w grafie o $V$ wierzchołkach może mieć co najwyżej $V-1$ krawędzi. Więc jeśli odległości spadają na $V$-tym kroku, proces kręci się w ujemnym cyklu w nieskończoność.", isCorrect: true },
            { text: "Ponieważ wartość wierzchołka źródłowego ulega dekrementacji w wirtualnej tablicy priorytetów.", isCorrect: false },
            { text: "Wynika to ze schematu algorytmu, w którym każda iteracja przypisuje ujemną wagę do drzewa MST.", isCorrect: false },
            { text: "Gdyż w grafie DAG dopuszczalne są ścieżki składające się z nieskończoności ujemnych powrotów.", isCorrect: false }
        ]
    },
    {
        id: 339,
        category: "Grafy: Kruskal (Analiza Złożoności)",
        text: "Jakie dwa pod-procesy z definicji składają się na wiodący składnik kosztu obliczeniowego w wyznaczaniu Drzewa MST Kruskala dla $O(E \\log V)$?",
        options: [
            { text: "Posortowanie krawędzi w $O(E \\log E)$ (co w grafie asymiluje do $O(E \\log V)$) oraz użycie do $|V|$ komend `Make-Set`, oraz do $2|E|$ zapytań `Find-Set` z funkcjami `Union`.", isCorrect: true },
            { text: "Wybudowanie zrównoważonego drzewa BSP $O(V \\log E)$ na wagach dróg poszczególnych pętli ujemnych.", isCorrect: false },
            { text: "Zastosowanie haszowania otwartego ze złym zagrupowaniem ($O(E^2)$).", isCorrect: false },
            { text: "Rotacja cykli w modelu BFS dająca asymetryczny rzut na podwójny logarytm krawędzi wektorów.", isCorrect: false }
        ]
    },

    {
        id: 340,
        category: "Sieci Przepływowe: Wycofanie przepływu",
        text: "W jaki sposób struktura grafu residualnego wspiera 'cofanie' przepływu za pomocą krawędzi powrotnych po nieoptymalnej decyzji dokonanej w poprzedniej iteracji przez algorytm Forda-Fulkersona?",
        options: [
            { text: "Algorytm w grafie residualnym przypisuje cofanej krawędzi wartość pojemności residualnej na anti-parallel-edge. Spychając przepływ tą wsteczną drogą matematycznie kasujemy pomyłkę z poprzedniego wyboru i wypychamy prąd inną ścieżką.", isCorrect: true },
            { text: "Zastępuje wagi krawędzi na zero stosując logikę Dijkstry ucinając węzły czarne z użyciem kolejki $Q$.", isCorrect: false },
            { text: "Generuje ona rotacje drzewa MST co usuwa fizycznie połączenie z ujemnej bazy pamięciowej.", isCorrect: false },
            { text: "Wcale tak się nie dzieje, decyzja algorytmu FFT uchodzi za natychmiastowo poprawną we wszystkich pętlach po wykreśleniu cyklu i nie dopuszcza do cofania prądu.", isCorrect: false }
        ]
    },
    {
        id: 341,
        category: "Sieci Przepływowe: Edmondsa-Karpa gwarancje",
        text: "Twierdzenie używane przy dowodach algorytmu Edmondsa-Karpa stanowi, że:",
        options: [
            { text: "Wraz z każdą odnalezioną ścieżką w grafie residualnym, minimalna odległość (liczba krawędzi) dowolnego wierzchołka od źródła rośnie lub pozostaje bez zmian (monotoniczność odległości).", isCorrect: true },
            { text: "Ilość krawędzi z negatywnymi sumami będzie się mnożyć po przejściu ścieżki relaksacyjnej z użyciem Dijkstry.", isCorrect: false },
            { text: "Cięcie w grafie staje się idealnie symetryczne z każdą nową pętlą.", isCorrect: false },
            { text: "Czas trwania rośnie liniowo niezależnie od grafu i sprowadza sie do Radix Sortu w pętli wielomianowej.", isCorrect: false }
        ]
    },

    {
        id: 342,
        category: "Wyszukiwanie Wzorca: Algorytm Rabina-Karpa",
        text: "Z jakiego mechanizmu matematycznego z modułami korzysta 'rolling hash' dla usunięcia najstarszego znaku we wzorcu i przesunięcia okna?",
        options: [
            { text: "Używa tożsamości kongruencyjnej, aby odjąć od sumy stary znak (pomnożony przez $d^{m-1} \\bmod q$), pomnożyć resztę przez $d$, dodać wartość liczbową nowego znaku na końcu i całość poddać modulo $q$.", isCorrect: true },
            { text: "Podnosi na bitach (shift operation) znaki tekstu wykluczając lewy skraj bez zapamiętywania tablicy rzutowania modułu binarnego.", isCorrect: false },
            { text: "Zgaduje skróty za pomocą uniwersalnego algorytmu Double Hashingu redukując kolizje pod zbiorem potęg liczby 2.", isCorrect: false },
            { text: "W algorytmie Rabina-Karpa nigdy nie usuwa się wektora wyrazu; wszystkie litery przelicza od nowa na wejście.", isCorrect: false }
        ]
    },
    {
        id: 343,
        category: "Wyszukiwanie Wzorca: KMP (Tablica \u03C0)",
        text: "Jakie jest zachowanie amortyzowane w czasie procedury `Compute-Prefix-Function(P)` podczas liczenia tabeli przesunięć w pętli?",
        options: [
            { text: "Pętla wewnętrzna `while` (dekrementująca indeks po niedopasowaniu) może wykonywać się wielokrotnie, ale w obrębie całej zewnętrznej pętli licznik cofania nie może spaść więcej razy niż łącznie narósł, co ogranicza sumaryczny koszt do $\\Theta(m)$.", isCorrect: true },
            { text: "W najgorszym scenariuszu wyliczenie tablicy przeskakującej rośnie z postępem geometrycznym dając czas $\\Theta(m \\log m)$.", isCorrect: false },
            { text: "Zawsze wykonuje dokładnie i sztywno jedną pętle `while` wewnątrz, robiąc krok stały.", isCorrect: false },
            { text: "Pętla działa asynchronicznie obciążając algorytm wyliczający po czasie wykonania i nie wlicza się jej do głównego zestawienia wcale.", isCorrect: false }
        ]
    },
    {
        id: 344,
        category: "Wyszukiwanie Wzorca: Boyera-Moore",
        text: "Z czym powiązana jest heurystyka złego znaku w implementacji Boyera-Moore'a na poziomie operacyjnym?",
        options: [
            { text: "Wymaga tablicy, która zapamiętuje ostatnią prawostronną pozycję wystąpienia każdego znaku z dostępnego wielkiego alfabetu (np. z tablicy 256 znaków ASCII), aby na jej podstawie podjąć decyzję o skoku.", isCorrect: true },
            { text: "Na budowie rekursywnego drzewa Trie ułożonego od tyłu jako maszyny o stanach do przesuwania o prefiksy w liściach.", isCorrect: false },
            { text: "Korzysta z kompresji LZW, aby pominąć całe spakowane wyrazy i podwajać prędkość szukania wzoru w archiwum.", isCorrect: false },
            { text: "Sprowadza się do znalezienia rzadko używanej samogłoski na krańcu wektora wyrazowego.", isCorrect: false }
        ]
    },

    {
        id: 345,
        category: "Analiza Algorytmów: Koszt Zamortyzowany (Metoda Potencjału)",
        text: "Jak sformułowany jest związek między kosztem amortyzowanym $\\hat{c_i}$, kosztem faktycznym $c_i$, a zmianą funkcji potencjału $\\Phi$ z $D_{i-1}$ na $D_i$?",
        options: [
            { text: "$\\hat{c_i} = c_i + \\Phi(D_i) - \\Phi(D_{i-1})$. Koszt zamortyzowany odpowiada kosztowi rzeczywistemu oraz zmianie ujętego potencjału struktury danych po tej operacji.", isCorrect: true },
            { text: "$\\hat{c_i} = \\log(c_i) + \\Phi(D_i)$. Funkcja ta musi być zawsze stała lub stało-malejąca.", isCorrect: false },
            { text: "$\\hat{c_i} = c_i \\cdot (\\Phi(D_i) / \\Phi(D_{i-1}))$. Stosunek zmian określa przyśpieszenie algorytmu odniesione na podział dynamiczny bazy.", isCorrect: false },
            { text: "Jest to różnica pojęć między czasem O(1) a kwadratami błędów wyrazu sumarycznego z PRAM.", isCorrect: false }
        ]
    },
    {
        id: 346,
        category: "Struktury Danych: Dynamiczna Tablica",
        text: "Jak wygląda standardowa strategia powiększania dynamicznej tablicy i jaki wynik w ujęciu zamortyzowanym to daje?",
        options: [
            { text: "Gdy wstawienie na pozycję przekracza rezerwację, alokuje nową tablicę o dwukrotnie większym rozmiarze ($2 \\times length$) i przepisuje tam rekordy, dzięki czemu wstawienie pojedynczego elementu na koniec kosztuje amortyzowane $\\Theta(1)$.", isCorrect: true },
            { text: "Co iterację przydziela tylko pamięć pod następny element powiększając się o 1; działa w czasie kwadratowym pesymistycznie ograniczonym przez stałe.", isCorrect: false },
            { text: "Powiększa się o 100 komórek po zapotrzebowaniu i daje nam czas logarytmiczny O(log n).", isCorrect: false },
            { text: "Jest to niemożliwe dla tradycyjnego zapisu tablicy by rosła, tablica rosnąca to w istocie zapakowana Skip Lista o podziałach na wskaźnik.", isCorrect: false }
        ]
    },
    {
        id: 347,
        category: "Drzewo Czerwono-Czarne: Dowody matematyczne",
        text: "Jednym z fundamentalnych dowodów rzutujących na strukturę operacji wyszukiwania RB-Tree jest granica jej wysokości wynikająca z zasady pokolorowania, a brzmiąca:",
        options: [
            { text: "Drzewo czerwono-czarne z $n$ węzłami wewnętrznymi ma zawsze wysokość co najwyżej $2 \\log_2(n+1)$.", isCorrect: true },
            { text: "Liczba elementów po prawej flance RB-Tree przekracza logarytmicznie węzły w lewym synostwie, dając maksymalnie sztywne ograniczenie mniejsze niż $1.44 \\log n$.", isCorrect: false },
            { text: "Z uwagi na naprzemienne i zakazane malowanie (Czerwony nie ma Czerwonego dziecka), drzewo ulega skracaniu z predykatem równym asymptotycznemu limitowi Fibonacciego w grafach Eulerowskich.", isCorrect: false },
            { text: "Maksymalna wysokość czarnego poddrzewa równa się węzłom od samej głębokości do minimum pod warunkiem potęgowania z dwójką.", isCorrect: false }
        ]
    },
    {
        id: 348,
        category: "Algorytmy Geometryczne: Płaszczyzna Zamiatania",
        text: "Kolejka Zdarzeń i Stan Zamiatania - jak się układają pozycje algorytmu poszukującego punktu cięć w odcinkach płaszczyzny Sweep Line?",
        options: [
            { text: "Punkty początkowe i końcowe wszystkich odcinków układane i przetrzymywane są posortowane na Kolejce Priorytetowej pod pozycjami osi X, a samo ułożenie po Y i sąsiedzi wirtualnej Miotły leżą i reagują na drzewie BST utrzymującym relacje.", isCorrect: true },
            { text: "Poszukiwanie zachodzi poprzez uderzenia i rotacje po osi wektora z dodawanym iloczynem i z wrzuceniem wszystkich wektorów pod stos po LIFO.", isCorrect: false },
            { text: "Zamiatanie usuwa mniejsze struktury ze zbalansowania pod postacią binarnego kopca i przesuwa wektory ku pozycjom zerowym.", isCorrect: false },
            { text: "Nie trzeba ich sortować, algorytm wykorzystuje metodę Hoare'a na samej macierzy w trybie dynamicznym w locie.", isCorrect: false }
        ]
    },
    {
        id: 349,
        category: "Kompresja: Huffmana pseudo-kod",
        text: "Z proceduralnego punktu widzenia na zaimplementowanym Kolejkowym Kodowaniu Huffmana, czym będzie element korzenia po zwinięciu kolejki i zapętleń w $n-1$ przejściach?",
        options: [
            { text: "Korzeń wyjęty na końcu z kolejki priorytetowej reprezentować będzie główny wierzchołek drzewa o zsumowanej i łącznej częstości dla całego podanego alfabetu ze zbioru C.", isCorrect: true },
            { text: "Korzeń na zawsze będzie punktował jako literę najrzadziej użytą by zagwarantować najdłuższy prefix binarnej sekwencji bitów.", isCorrect: false },
            { text: "Będzie wskaźnikiem na wektor tablicy dla kodu LZW kompresji słownikowej.", isCorrect: false },
            { text: "Z racji wskaźników z Union-Find utworzy w lesie element reprezentatywny dla ścieżki i powrotów dróg eulerowskich.", isCorrect: false }
        ]
    },
    {
        id: 350,
        category: "Algorytmy Równoległe",
        text: "Architektury z rodziny PRAM oraz koncepcje rozwiązań równoległych w przypadku modelu wyznaczania maksymalnego elementu dają nam możliwość:",
        options: [
            { text: "Korzystając z bardzo asertywnego i silnie uzbrojonego modelu zapisu jednoczesnego CRCW odnaleźć maksymalny ułamek ze zbioru z ekstremalnym skokiem przyspieszenia z pomocą kwadratowej liczby procesorów nawet w stałym wymiarze i ułamku $O(1)$.", isCorrect: true },
            { text: "Znalezienia we wszystkich maszynach PRAM sum prefiksów w zaledwie zammortyzowanym koszcie 1 taktu sprzętowego opartym na operacjach MMX bez tablic.", isCorrect: false },
            { text: "Usunięcie kolizji na operacjach wektorowych w architekturze SISD z pominięciem kompilacji i ograniczenia na cykl.", isCorrect: false },
            { text: "Tylko EREW ma predyspozycje obliczeniowe dla skomplikowanych macierzy wektorowych przy mnożeniach.", isCorrect: false }
        ]
    },
    {
        id: 351,
        category: "Sortowanie: Statystyki na Radix",
        text: "Aby uzyskać gwarantowany czas liniowy w sortowaniu d-znakowych słów z wykorzystaniem radix-sort, jaki wariant algorytmu powinien stać we wnętrzu pętli i od jakiej litery układ jest poddawany analizie?",
        options: [
            { text: "Musimy stabilnie przesiać słowa (np. Counting-Sort'em) idąc od Ostatniej i prawej Litery (Least Significant Digit - LSB) pnąc się po pozycjach aż do Litery Pierwszej z lewej.", isCorrect: true },
            { text: "Algorytm musi startować od Litery Pierwszej z lewej układając wyraz na zasadzie Drzewa Prefixowego by skrócić węzły ułożenia na wektorze w Czerwono-Czarne węzły.", isCorrect: false },
            { text: "Wykorzystuje on zmienną tablicy dla Heapsort'a i iteruje dla każdej litery w $O(n \\log n)$.", isCorrect: false },
            { text: "To błąd, stabilność w algorytmach ciągów słownych nakazuje odrzucenie metody radix i postawienie na złośliwe zbiory Quicksort'a ze środkowym rozdzialaniem znaków z ułamków liter.", isCorrect: false }
        ]
    },
    {
        id: 352,
        category: "Drzewa AVL: Detale z wykładów",
        text: "Złożenie rotacji podwójnej w AVL (np. LR, Left-Right) składa się z połączonych działań. Czy w czasie takiej rotacji podwójnej następuje fizyczna zmiana wysokości poszczególnych poddrzew od samej dolej korony z rotowanego węzła?",
        options: [
            { text: "Rotacja podwójna u swych podnóży fizycznie 'wyciąga' wyżej węzeł wnuka zaangażowany w zakręt z podniesieniem go ponad jego ojca i dziadka z zachowaniem warunków przeszukiwania BST.", isCorrect: true },
            { text: "Obydwie rotacje dokonują inwersji i przekolorowania i sprowadzają go do najniższych partii kopcowych.", isCorrect: false },
            { text: "Tak, i powoduje zawsze zmianę na mniejszą głębokość do wartości ujemnej $-1$.", isCorrect: false },
            { text: "W ogóle nie ma ingerencji na najniższych koronach, dotyczy to węzłów z podczepieniami pośrodku tablic na korzeniach odwróconych.", isCorrect: false }
        ]
    },
    {
        id: 353,
        category: "Drzewa Czerwono-Czarne",
        text: "Ile dzieci posiada węzeł-liść zwany NIL'em w prawidłowo zbudowanym Drzewie Czerwono Czarnym?",
        options: [
            { text: "Ani jednego - liście NIL ze względów logicznych, operacyjnych oraz warunkowych są absolutnymi, pustymi zatyczkami czarnego koloru na drogach powstrzymującymi zejścia głębiej.", isCorrect: true },
            { text: "Posiadają zawsze lewe i prawe puste wskaźniki.", isCorrect: false },
            { text: "Mają wskaźnik przypisany tylko ze zwrotem w górę o kolorze obróconym do barwy szarej.", isCorrect: false },
            { text: "Równy rozmiarowi tablic Dowiązań o wielkości skompensowanej ze zmienną w tablicy powrotów do węzłów szczytowych.", isCorrect: false }
        ]
    },
    {
        id: 354,
        category: "Algorytmy Geometryczne: Iloczyn Wektorowy (Cross Product)",
        text: "Co charakteryzuje i rozstrzyga o znaku (+, -, 0) przy weryfikacji kierunku skrętu przez iloczyn wektorowy wyliczany wg punktów $p_1, p_2, p_3$ dla funkcji $\\text{det}(p_1, p_2, p_3) = (x_2-x_1)(y_3-y_1) - (x_3-x_1)(y_2-y_1)$?",
        options: [
            { text: "Jeżeli znak iloczynu będzie dodatni ($>0$), ścieżka od $p_1 \\rightarrow p_2 \\rightarrow p_3$ tworzy zakręt lub skręt lewy (przeciwnie do wskazówek zegara).", isCorrect: true },
            { text: "Dla zera stwierdzamy obecność zakrętu ułamkowego w wektorach równoległych dających znak lewy.", isCorrect: false },
            { text: "Wartość ujemna determinuje występowanie błędu oznaczającego wyjście z systemu w układzie prawoskrętnym kartezjusza.", isCorrect: false },
            { text: "Znak nie ma znaczenia bo funkcja wypluwa zawsze przedział wartości ze średnią z promienia punktów i ułożeniem kąta radiana na okręgu.", isCorrect: false }
        ]
    },
    {
        id: 355,
        category: "Struktury Danych: Analiza Złożoności i Stos",
        text: "Dlaczego ciąg $n$ operacji `Multipop(S, k)` zdejmujących $k$ elementów na raz z pustniejącego w czasie stosu ma w modelu sumarycznej analizy amortyzowanej złożoność na poziomie $O(n)$ i kosztem operacji $O(1)$?",
        options: [
            { text: "Ponieważ przez cały czas trwania algorytmu element może wejść na stos poprzez `Push` zaledwie 1 raz oraz zejść poprzez ściągnięcie w `Multipop` rygorystycznie 1 raz. Łączna i całkowita suma limitów nie może przerodzić się dla stosu powyżej wkładanych na początku $n$.", isCorrect: true },
            { text: "Z powodu redukcji funkcji i obcięcia wkładów i wejść do zera na elementach ze statusem powielonym.", isCorrect: false },
            { text: "Algorytm musi mieć narzucony warunek w urojonym długu równym $\\Phi(D_i) < 0$.", isCorrect: false },
            { text: "Nie wynosi $O(n)$. Ze względu na wywołania w wektorach kwadratowych ma sumaryczny koszt kwadratowy ze średnią $O(n)$.", isCorrect: false }
        ]
    },
    {
        id: 356,
        category: "Grafy: Przeszukiwanie Wszerz (Kruczki w drzewach BFS)",
        text: "Krawędzie Grafowe ze skierowaniami w podziale BFS zachowują jedną stałą w budowie. Jakie typy odgałęzień nigdy nie mogą pojawić się po rzetelnym podzieleniu wierzchołków grafów drzewem dla BFS?",
        options: [
            { text: "Drzewo rozpinające Przeszukiwania Wszerz w żadnym stopniu nie zrodzi ani nie utrzyma krawędzi skierowanych na odległość i 'w przód' (forward edges) dających ucieczkę dalej na przód w gałęzi (wskazują do innych lub tego samego poziomu w cross-ach ale ominąć poziomu skokiem by tak się nazywały nie mogą).", isCorrect: true },
            { text: "Występowanie Back edges jest w nim całkowicie niemożliwe dla dowolnego grafu pod żadnym z pozoru.", isCorrect: false },
            { text: "Krawędzie w leśnych rozgałęzieniach BFS wchodzą na siebie z przesunięciami kwadratowymi krzyżując się w ujemnych z wagami.", isCorrect: false },
            { text: "Drzewa BFS dopuszczają rzadko ułożenie poprzeczne ale w przód są absolutnie zawsze obecnymi do tworzenia wierzchołków bez ścieżek pośrednich wewnątrz odgałęzień na ślepo.", isCorrect: false }
        ]
    },
    {
        id: 357,
        category: "Statystyki Pozycyjne: Drzewo OS z Cormena",
        text: "Oprócz operacji przypisywania wielkości `size`, z drzew OS można swobodnie usunąć strukturę trzymającą tablice powiązań za pomocą samej własności o utrzymywaniu na poziomie korzeniowych złączeń.",
        options: [
            { text: "Faktycznie, wszystkie procedury OS z wyznaczeniem rzędu w $O(\\log n)$ bazują i utrzymują się wyłącznie na wstawieniu w standardowe węzły (np. drzewa RB) tylko i wyłącznie tej samej, stałej, zaledwie jednej dodatkowej liczby atrybutu powiększania 'size'.", isCorrect: true },
            { text: "Nieprawda; by OS utrzymywało pozycje pod każdą wstawkę muszą doliczać i wymuszać w tablicy pamięci operacyjnej zapisu dla całej listy tablicowej i poszczególnego wariantu każdego klucza ze wszystkimi wartościami dla nich w locie pod rank.", isCorrect: false },
            { text: "Rozbudowa do Drzew Poszukiwań wymaga trójwymiarowych punktów i ich referencji przy rotacji z powodu zmiany skali i poziomu szukanych kluczy ułożonych poziomo.", isCorrect: false },
            { text: "Atrybut rozmiaru (size) zastępuje w drzewach OS atrybut wskaźników do węzła po prawicy wektora równego w skali drzew poszukiwań i unika alokacji dla wszystkich pni na wyciągnięciach z gałęzi.", isCorrect: false }
        ]
    },
    {
        id: 358,
        category: "Algorytmy Sortowania: Warianty optymalne",
        text: "Analizując stabilność złożoności w implementacjach programistycznych Merge Sort'a, do jakich zabiegów i optymalizacji dla podtablic decydują się uciekać autorzy?",
        options: [
            { text: "Do wyłączenia z używania kosztownych operacyjnie kroków rekurencji Merga w okolicach najmniejszych stadiów problemu, zastępując go i przekazując pod zadania w małych grupach (rzędu mniejszych niż $n < 43$ czy podobne) dla Sortowania przez Wstawianie (Insertion Sort), wygrywających ze względu na zminimalizowanie stałego i niewidzialnego we wzorze narzutu.", isCorrect: true },
            { text: "Poprzez wywoływania i sorty dla tablic wejściowych by w procedurze Hoarea ominęły one pesymistyczne scenariusze przez Quickselect do wylosowania małych wielokrotności skoków i na końcu włożenie ich dla Heapsorta od tyłu.", isCorrect: false },
            { text: "Dzięki zamianie całej operacji Sort na podrzut na stos w celach kompensacji w pamięci dla odziedziczenia mniejszych i szybszych do porównania klastrów o minimalnym zniekształceniu na zewnątrz bez jakiegokolwiek przeliczania.", isCorrect: false },
            { text: "Nie ma w nich zabiegów ucinających, Sortowanie i algorytm Merge używa od lat tej samej metody w 100 procentach pozbawionej innych algorytmów z powrotem.", isCorrect: false }
        ]
    },
    {
        id: 359,
        category: "Grafy: DFS (Lasy)",
        text: "Co wynika i oznacza pojęcie Drzew Rozpinających z DFS po określeniu lasów na drzewach odłączonych od siebie pod kątem węzłów z pominięciem kolorów dla G(V, E)?",
        options: [
            { text: "Las DFS tworzony jest ze wszystkich krawędzi które prowadziły ze źródeł odwiedzanych do i podczas odkywania zupełnie nowych (białych) wektorów/wierzchołków grafu. Pozostałe odcinane są ze struktur głównych dla grafu DFS i zostawiając jedynie czyste wchodzące z tych właśnie do poszukiwań dają mu wygląd wolny od jakichkolwiek uwięzień w pętle na krawędzi.", isCorrect: true },
            { text: "Las i skrajne krawędzie tworzone są ze złożenia do zera węzłów i z zarysowania pętli z ominięciami tylko na punktach i szczytach odnajdując wszystkie z pętlami cyklicznymi dając skrajnie poprzeczne węzły a usuwając pozycje z pierwszych gałęzi na wejściach drzew bez odnogi do tyłu i zwrotu.", isCorrect: false },
            { text: "Należą tu wyłącznie wierzchołki i wektory posiadające stopnie z wchodzącymi krawędziami większymi dla potęg od wartości logarytmicznej w podanym drzewie macierzy kwadratowych ograniczając i uciskając cały graf.", isCorrect: false },
            { text: "Z uwagi na procedury DFS graf i las to nie drzewa a uporządkowany pod względem topologicznym układ ułożony w jednym wektorze szeregowym pod wejściem i wyjściem dla pętli głównej i jednoczesnym zerowaniu wyjść.", isCorrect: false }
        ]
    },
    {
        id: 360,
        category: "Algorytmy Tekstowe: Metoda Naiwna z Modulo",
        text: "Mimo wolniejszej teoretycznie metody Rabin-Karp do zadeklarowanego działania z użyciem arytmetyki modulernej pod kątem wielkich zestawień (duży wzór wejściowy z tekstem powiększającym logarytm bitowy i błędy z cyklami przepełnień na Intach na maszynach sprzętowych) decyduje się na obcięcie go dzielnikiem z modulo ($q$). Do czego ma prowadzić taka decyzja odnośnie złożoności?",
        options: [
            { text: "Zabezpiecza przed błędem z przekroczenia i przepełnienia wielkich liczb i wartości pod rejestrem ale wymusza omijanie fałszywych trafień (spurious hits) co pociąga szansę (i narzuca bezwzględny koszt na sprawdzenie) na pesymistyczny w skrajności scenariusz o wzroście działania w czasie kwadratowym $O(m \\cdot (n-m+1))$ na sprawdzanie nietrafień mimo zgadzającej się liczby pod wycinkami reszty.", isCorrect: true },
            { text: "Narzuca zredukowanie czasu wykonywania pętli we wzorze o cały ułamek dla wielkości długości uciętego elementu ale podnosi ułamki błędnie dopasowując reszty co doprowadza w 100% czasu pod zyskanie stabilnego w każdym przypadku wyniku w $\\Theta(1)$ ale dla błędu z prawdopodobieństwem odrzutu w 99% sprawdzając rzut monety i fałszywie.", isCorrect: false },
            { text: "Rozdziela to tekst i okna pod wejściem na tablicę KMP a następnie pomija tablicę dla zyskania wyniku i skrócenia zapisu okna pod przeskoki Boyera wyłączając i modyfikując tablicę.", isCorrect: false },
            { text: "Zapobiega sprawdzaniu liter na tekście a ujemne modula odcinają i negują cykle ujemnych okien z dopasowaniami przycinając je pod zera pozycję i od nowa wyliczając hash na całej liście skrótów ze słownika i tablic listowych LZW ze znakiem końca linii EOF.", isCorrect: false }
        ]
    },

    {
        id: 281,
        category: "Drzewa AVL",
        text: "Jaki jest główny warunek (niezmiennik), który musi spełniać drzewo AVL, aby uchodzić za zbalansowane?",
        options: [
            { text: "Różnica wysokości lewego i prawego poddrzewa dla każdego węzła wynosi co najwyżej 1 (współczynnik balansu to -1, 0 lub 1).", isCorrect: true },
            { text: "Każdy węzeł musi posiadać dokładnie dwoje lub zero dzieci.", isCorrect: false },
            { text: "Wysokość całego drzewa musi być dokładnie równa $\\log_2 n$.", isCorrect: false },
            { text: "Wartość w każdym węźle musi być średnią arytmetyczną jego dzieci.", isCorrect: false }
        ]
    },
    {
        id: 282,
        category: "Drzewa AVL",
        text: "Jakie wartości może przyjmować współczynnik wyważenia (Balance Factor) w poprawnym drzewie AVL?",
        options: [
            { text: "$-1$", isCorrect: true },
            { text: "$0$", isCorrect: true },
            { text: "$1$", isCorrect: true },
            { text: "$2$", isCorrect: false }
        ]
    },
    {
        id: 283,
        category: "Drzewa AVL",
        text: "Z jaką asymptotyczną złożonością czasową wykonują się operacje Search, Insert i Delete w drzewie AVL?",
        options: [
            { text: "Zawsze w czasie $\\Theta(\\log n)$.", isCorrect: true },
            { text: "Średnio $\\Theta(\\log n)$, ale w najgorszym przypadku $O(n)$.", isCorrect: false },
            { text: "Zawsze w czasie stałym $\\Theta(1)$.", isCorrect: false },
            { text: "Zamortyzowanym $O(1)$.", isCorrect: false }
        ]
    },
    {
        id: 284,
        category: "Drzewa AVL",
        text: "Jeśli dodany węzeł zaburzył balans drzewa AVL i spowodował przeciążenie lewego dziecka z jego lewej strony (współczynnik balansu korzenia $> 1$, a lewego dziecka $> 0$), jaką rotację należy wykonać?",
        options: [
            { text: "Pojedynczą rotację w prawo (Right Rotation) na korzeniu.", isCorrect: true },
            { text: "Pojedynczą rotację w lewo (Left Rotation) na korzeniu.", isCorrect: false },
            { text: "Podwójną rotację Left-Right.", isCorrect: false },
            { text: "Podwójną rotację Right-Left.", isCorrect: false }
        ]
    },

    {
        id: 285,
        category: "Sortowanie przez wstawianie",
        text: "Kiedy Sortowanie przez Wstawianie (Insertion Sort) osiąga swój najlepszy czas działania równy $\\Omega(n)$?",
        options: [
            { text: "Gdy tablica wejściowa jest już całkowicie posortowana rosnąco.", isCorrect: true },
            { text: "Gdy tablica jest posortowana malejąco (odwrotnie).", isCorrect: false },
            { text: "Gdy tablica składa się z elementów wygenerowanych całkowicie losowo.", isCorrect: false },
            { text: "Nigdy, najlepszy przypadek to zawsze $\\Omega(n^2)$.", isCorrect: false }
        ]
    },
    {
        id: 286,
        category: "Dziel i Zwyciężaj",
        text: "Które z poniższych algorytmów opierają się bezpośrednio na strategii 'Dziel i Zwyciężaj'?",
        options: [
            { text: "Merge Sort (Sortowanie przez scalanie).", isCorrect: true },
            { text: "Quicksort (Sortowanie szybkie).", isCorrect: true },
            { text: "Wyszukiwanie binarne (Binary Search).", isCorrect: true },
            { text: "Bubble Sort (Sortowanie bąbelkowe).", isCorrect: false }
        ]
    },
    {
        id: 287,
        category: "Merge Sort",
        text: "Jaka jest złożoność pamięciowa algorytmu Merge Sort i z czego ona wynika?",
        options: [
            { text: "$O(n)$ - wynika z konieczności utworzenia dodatkowych tablic pomocniczych podczas procesu scalania (Merge).", isCorrect: true },
            { text: "$O(1)$ - algorytm sortuje w miejscu.", isCorrect: false },
            { text: "$O(\\log n)$ - wynika ze stosu wywołań rekurencyjnych.", isCorrect: false },
            { text: "$O(n^2)$ - z powodu tworzenia macierzy decyzji.", isCorrect: false }
        ]
    },
    {
        id: 288,
        category: "Twierdzenie o rekurencji uniwersalnej",
        text: "Aby rozwiązać równanie $T(n) = aT(n/b) + f(n)$ za pomocą Twierdzenia o Rekurencji Uniwersalnej (Master Theorem), jakie warunki muszą spełniać stałe $a$ i $b$?",
        options: [
            { text: "$a \\ge 1$", isCorrect: true },
            { text: "$b > 1$", isCorrect: true },
            { text: "$a > 0$ oraz $b = 1$", isCorrect: false },
            { text: "Funkcja $f(n)$ musi być asymptotycznie równa $0$.", isCorrect: false }
        ]
    },

    {
        id: 289,
        category: "Struktury Danych: Kopiec",
        text: "Co oznacza własność kopca typu MAX (Max-Heap property) dla dowolnego węzła $i$ z pominięciem korzenia?",
        options: [
            { text: "$A[Parent(i)] \\ge A[i]$", isCorrect: true },
            { text: "$A[Parent(i)] \\le A[i]$", isCorrect: false },
            { text: "$A[Left(i)] > A[Right(i)]$", isCorrect: false },
            { text: "Wysokość lewego i prawego poddrzewa jest równa.", isCorrect: false }
        ]
    },
    {
        id: 290,
        category: "Algorytmy Kopcowe",
        text: "Z jaką złożonością czasową działa procedura przywracania własności kopca w dół, czyli `Max-Heapify`?",
        options: [
            { text: "$O(\\log n)$", isCorrect: true },
            { text: "$O(n)$", isCorrect: false },
            { text: "$O(1)$", isCorrect: false },
            { text: "$O(n \\log n)$", isCorrect: false }
        ]
    },
    {
        id: 291,
        category: "Heapsort",
        text: "Czy algorytm Heapsort (Sortowanie przez kopcowanie) jest stabilny oraz czy sortuje w miejscu?",
        options: [
            { text: "Jest niestabilny.", isCorrect: true },
            { text: "Sortuje w miejscu (złożoność pamięciowa dodatkowa $O(1)$).", isCorrect: true },
            { text: "Jest stabilny.", isCorrect: false },
            { text: "Wymaga pamięci proporcjonalnej do $O(n)$.", isCorrect: false }
        ]
    },

    {
        id: 292,
        category: "Quicksort",
        text: "Jaki jest pesymistyczny czas działania algorytmu Quicksort i kiedy on najczęściej występuje (w wariancie bez randomizacji)?",
        options: [
            { text: "Wynosi $O(n^2)$ i występuje, gdy tablica jest już posortowana, a na pivot wybierany jest element skrajny.", isCorrect: true },
            { text: "Wynosi $O(n \\log n)$ dla każdego wejścia.", isCorrect: false },
            { text: "Wynosi $O(n^2)$ i występuje tylko wtedy, gdy wszystkie elementy w tablicy są unikalne.", isCorrect: false },
            { text: "Wynosi $O(n!)$, co wynika z drzewa decyzyjnego.", isCorrect: false }
        ]
    },
    {
        id: 293,
        category: "Sortowanie w czasie liniowym",
        text: "Co jest kluczowym warunkiem, aby użyć algorytmu Counting Sort (Sortowanie przez zliczanie)?",
        options: [
            { text: "Dane wejściowe muszą być liczbami całkowitymi z pewnego, z góry znanego i skończonego przedziału $[0, k]$.", isCorrect: true },
            { text: "Tablica musi posiadać rozkład jednostajny (równomierny).", isCorrect: false },
            { text: "Wszystkie elementy w tablicy muszą być mniejsze niż $n$.", isCorrect: false },
            { text: "Algorytm ten działa tylko na strukturach grafowych.", isCorrect: false }
        ]
    },
    {
        id: 294,
        category: "Sortowanie pozycyjne",
        text: "Jak działa algorytm Radix Sort?",
        options: [
            { text: "Sortuje dane iteracyjnie, najczęściej pozycjami od najmniej znaczącej cyfry (LSB) do najbardziej znaczącej (MSB).", isCorrect: true },
            { text: "Używa algorytmu 'dziel i zwyciężaj' by rozbić liczby na połówki bitowe.", isCorrect: false },
            { text: "Sortuje od najbardziej znaczącej cyfry w dół, używając kopca binarnego.", isCorrect: false },
            { text: "Jest to inna nazwa na Insertion Sort działający na literach.", isCorrect: false }
        ]
    },

    {
        id: 295,
        category: "Struktury Danych: Stos",
        text: "Z jakimi złożonościami czasowymi (w najlepszej implementacji) działają operacje PUSH oraz POP na stosie?",
        options: [
            { text: "Obie operacje wykonują się w czasie $O(1)$.", isCorrect: true },
            { text: "PUSH wykonuje się w $O(1)$, ale POP wymaga $O(n)$.", isCorrect: false },
            { text: "PUSH w $O(n)$, POP w $O(1)$.", isCorrect: false },
            { text: "Wymagają czasu logarytmicznego $O(\\log n)$.", isCorrect: false }
        ]
    },
    {
        id: 296,
        category: "Struktury Danych: Kolejka",
        text: "Jaką strategię obsługi elementów realizuje struktura Kolejki (Queue)?",
        options: [
            { text: "FIFO (First In, First Out) - pierwszy na wejściu, pierwszy na wyjściu.", isCorrect: true },
            { text: "LIFO (Last In, First Out) - ostatni na wejściu, pierwszy na wyjściu.", isCorrect: false },
            { text: "Priority - elementy wychodzą wg wagi klucza.", isCorrect: false },
            { text: "Random - element zdejmuje się losowo.", isCorrect: false }
        ]
    },

    {
        id: 297,
        category: "Drzewa BST",
        text: "Z jaką operacją kojarzy się poszukiwanie minimalnego elementu w drzewie BST?",
        options: [
            { text: "Z podążaniem cały czas lewymi wskaźnikami od korzenia, aż napotkamy wartość NIL.", isCorrect: true },
            { text: "Z przejściem drzewa algorytmem BFS.", isCorrect: false },
            { text: "Z odczytem wskaźnika korzenia (ponieważ korzeń to zawsze minimum w BST).", isCorrect: false },
            { text: "Ze zsumowaniem wagi wszystkich liści.", isCorrect: false }
        ]
    },
    {
        id: 298,
        category: "Drzewa Czerwono-Czarne",
        text: "Która z poniższych zasad dotyczy bezpośrednio tzw. czarnej wysokości (black-height) w drzewach RB?",
        options: [
            { text: "Każda prosta ścieżka od ustalonego węzła do któregokolwiek z jego liści potomnych (NIL) zawiera dokładnie taką samą liczbę czarnych węzłów.", isCorrect: true },
            { text: "Czarna wysokość całego drzewa musi być równa liczbie węzłów czerwonych.", isCorrect: false },
            { text: "Każdy czerwony węzeł musi mieć czarną wysokość równą 0.", isCorrect: false },
            { text: "Zasada ta dotyczy jedynie drzew AVL, a nie drzew RB.", isCorrect: false }
        ]
    },

    {
        id: 299,
        category: "Tablice Haszujące",
        text: "Czym jest metoda łańcuchowa (chaining) w kontekście rozwiązywania kolizji?",
        options: [
            { text: "Techniką, w której wszystkie elementy przypisane przez funkcję haszującą do tego samego indeksu (slotu) są przechowywane na liście powiązanej pod tym indeksem.", isCorrect: true },
            { text: "Metodą, w której algorytm szuka kolejnej pustej komórki sąsiadującej w tablicy.", isCorrect: false },
            { text: "Rodzajem adresu MAC doczepianego do wartości klucza.", isCorrect: false },
            { text: "Zjawiskiem negatywnym polegającym na nieskończonym zapętleniu wskaźników.", isCorrect: false }
        ]
    },
    {
        id: 300,
        category: "Skip Lists",
        text: "Jakie jest główne przeznaczenie List Przeskakiwania (Skip Lists)?",
        options: [
            { text: "Stanowią probabilistyczną alternatywę dla zbalansowanych drzew BST, pozwalając na wstawianie, usuwanie i szukanie w oczekiwanym czasie $O(\\log n)$.", isCorrect: true },
            { text: "Służą do wyznaczania cykli w grafach nieskierowanych.", isCorrect: false },
            { text: "Pozwalają na stabilne sortowanie w czasie $O(n)$.", isCorrect: false },
            { text: "Wykorzystuje się je w adresowaniu otwartym tablic haszujących.", isCorrect: false }
        ]
    },

    {
        id: 301,
        category: "Statystyki Pozycyjne",
        text: "Co oznacza termin 'mediana' w ujęciu algorytmu znalezienia $i$-tej statystyki pozycyjnej dla zbioru $n$-elementowego?",
        options: [
            { text: "Jest to element, którego ranga (pozycja w posortowanym ciągu) wynosi $\\lfloor (n+1)/2 \\rfloor$ (mediana dolna) lub $\\lceil (n+1)/2 \\rceil$ (mediana górna).", isCorrect: true },
            { text: "Jest to różnica między maksymalnym a minimalnym elementem zbioru.", isCorrect: false },
            { text: "Jest to wartość, która występuje najczęściej w zbiorze (dominanta).", isCorrect: false },
            { text: "Jest to element wyznaczony przez korzeń każdego drzewa binarnego.", isCorrect: false }
        ]
    },
    {
        id: 302,
        category: "Drzewa Przedziałowe",
        text: "Kiedy mówimy, że dwa przedziały (interwały) $i$ oraz $i'$ się przecinają (nakładają)?",
        options: [
            { text: "Kiedy $i.low \\le i'.high$ oraz $i'.low \\le i.high$.", isCorrect: true },
            { text: "Tylko wtedy, gdy $i.low = i'.low$.", isCorrect: false },
            { text: "Kiedy pole `max` jednego z nich jest ujemne.", isCorrect: false },
            { text: "Gdy oba przedziały mają dokładnie tę samą długość.", isCorrect: false }
        ]
    },

    {
        id: 303,
        category: "Reprezentacja Grafów",
        text: "Która z metod reprezentacji grafu zajmuje pamięć rzędu $\\Theta(V^2)$ i jest idealna do sprawdzania w czasie stałym $O(1)$, czy pomiędzy danymi dwoma wierzchołkami istnieje krawędź?",
        options: [
            { text: "Macierz sąsiedztwa.", isCorrect: true },
            { text: "Lista sąsiedztwa.", isCorrect: false },
            { text: "Macierz incydencji.", isCorrect: false },
            { text: "Kopiec Fibonacciego.", isCorrect: false }
        ]
    },
    {
        id: 304,
        category: "Przeszukiwanie Wszerz (BFS)",
        text: "Jaką rolę pełni zabarwienie wierzchołków na CZARNO w algorytmie BFS?",
        options: [
            { text: "Oznacza, że wierzchołek został odwiedzony, zdjęty z kolejki i wszystkie jego bezpośrednie sąsiedztwa również zostały już przejrzane.", isCorrect: true },
            { text: "Oznacza węzły, które nie są osiągalne z punktu źródłowego.", isCorrect: false },
            { text: "Definiuje krawędzie wchodzące w skład najdłuższego cyklu.", isCorrect: false },
            { text: "Kolor czarny jest używany tylko w DFS, BFS używa wyłącznie flag True/False.", isCorrect: false }
        ]
    },
    {
        id: 305,
        category: "Skierowany Graf Acykliczny (DAG)",
        text: "Jaka relacja panuje w grafie DAG między krawędziami a algorytmem DFS?",
        options: [
            { text: "Graf skierowany jest DAG-iem (nie ma cykli) wtedy i tylko wtedy, gdy uruchomiony na nim algorytm DFS nie napotyka ani jednej krawędzi powrotnej (back edge).", isCorrect: true },
            { text: "W DAG-u każda krawędź sklasyfikowana przez DFS musi być krawędzią w przód.", isCorrect: false },
            { text: "DFS na DAG-u przetwarza wierzchołki zawsze w czasie $\\Theta(V^3)$.", isCorrect: false },
            { text: "DFS nie działa poprawnie na DAG-u z powodu braku korzenia.", isCorrect: false }
        ]
    },

    {
        id: 306,
        category: "Algorytm Prima",
        text: "W jaki sposób algorytm Prima znajduje Minimalne Drzewo Rozpinające (MST)?",
        options: [
            { text: "Wybiera dowolny wierzchołek startowy i w każdej iteracji, używając kolejki priorytetowej, zachłannie dołącza do budowanego drzewa wierzchołek połączony z nim najtańszą (najlżejszą) dostępną krawędzią.", isCorrect: true },
            { text: "Sortuje wszystkie krawędzie od najtańszej i dodaje je po kolei unikając cykli.", isCorrect: false },
            { text: "Wymusza relaksację wszystkich krawędzi tak samo jak Bellman-Ford.", isCorrect: false },
            { text: "Znajduje minimalny przepływ w sieci i wycina niepotrzebne ścieżki.", isCorrect: false }
        ]
    },
    {
        id: 307,
        category: "Algorytm Dijkstry",
        text: "Dlaczego algorytm Dijkstry nie może być stosowany na grafach z ujemnymi wagami krawędzi?",
        options: [
            { text: "Ponieważ w momencie ściągania wierzchołka z kolejki priorytetowej algorytm uznaje, że odnalazł definitywnie najkrótszą drogę do niego; ujemna krawędź mogłaby to założenie później zepsuć.", isCorrect: true },
            { text: "Ponieważ kolejki priorytetowe z definicji nie potrafią przechowywać ujemnych kluczy.", isCorrect: false },
            { text: "Z powodu błędu dzielenia przez zero przy liczeniu wag.", isCorrect: false },
            { text: "Ponieważ algorytm działa na grafach nieskierowanych, a krawędzie ujemne istnieją tylko w grafach skierowanych.", isCorrect: false }
        ]
    },
    {
        id: 308,
        category: "Algorytm Bellmana-Forda",
        text: "Z jaką złożonością czasową działa algorytm Bellmana-Forda wyznaczający najkrótsze ścieżki z jednego źródła?",
        options: [
            { text: "$O(V \\cdot E)$", isCorrect: true },
            { text: "$O((V + E) \\log V)$", isCorrect: false },
            { text: "$O(V^3)$", isCorrect: false },
            { text: "$O(E \\log V)$", isCorrect: false }
        ]
    },
    {
        id: 309,
        category: "Algorytm Floyda-Warshalla",
        text: "Dla jakiego problemu projektowany jest algorytm Floyda-Warshalla?",
        options: [
            { text: "Dla poszukiwania najkrótszych ścieżek między każdą parą wierzchołków w grafie (All-Pairs Shortest Paths).", isCorrect: true },
            { text: "Dla wyznaczania drzewa MST w grafach dwudzielnych.", isCorrect: false },
            { text: "Wyłącznie dla problemu komiwojażera.", isCorrect: false },
            { text: "Dla sprawdzania spójności silnej grafów wielowymiarowych.", isCorrect: false }
        ]
    },
    {
        id: 310,
        category: "Koszt Zamortyzowany",
        text: "Jak definiowany jest 'koszt zamortyzowany' operacji na strukturze danych?",
        options: [
            { text: "Jako średni czas wykonania na operację wewnątrz najgorszego (pesymistycznego) długiego ciągu operacji.", isCorrect: true },
            { text: "Jako absolutny czas najdłuższej operacji w systemie pomnożony przez $N$.", isCorrect: false },
            { text: "Jako czas optymistyczny po podzieleniu przez stałą sprzętową.", isCorrect: false },
            { text: "To synonim czasowej złożoności w ujęciu $\\Omega(1)$.", isCorrect: false }
        ]
    },

    {
        id: 311,
        category: "Sieci Przepływowe",
        text: "Co oznacza termin 'przepustowość krawędzi' (capacity) $c(u,v)$ w sieci przepływowej?",
        options: [
            { text: "Określa ona maksymalną wartość przepływu (flow), jaka może zostać przesłana bezpośrednio z wierzchołka $u$ do $v$.", isCorrect: true },
            { text: "Oznacza minimalny przepływ wymagany, aby krawędź się nie załamała.", isCorrect: false },
            { text: "Suma wag na wszystkich ścieżkach do ujścia.", isCorrect: false },
            { text: "Odległość w kilometrach między węzłami.", isCorrect: false }
        ]
    },
    {
        id: 312,
        category: "Sieci Przepływowe: Przekrój",
        text: "W jaki sposób definiowana jest wartość przepływu całego grafu w oparciu o Twierdzenie Max-Flow Min-Cut?",
        options: [
            { text: "Maksymalny możliwy przepływ jest równy przepustowości minimalnego przekroju (cięcia) w tej sieci.", isCorrect: true },
            { text: "Maksymalny przepływ jest równy sumie wag wszystkich krawędzi minus przepływy zwrotne.", isCorrect: false },
            { text: "Zależy wyłącznie od różnicy między źródłem a najmniejszym ujściem.", isCorrect: false },
            { text: "Jest równy pojemności najgrubszej pojedynczej rury w systemie.", isCorrect: false }
        ]
    },
    {
        id: 313,
        category: "Algorytmy Tekstowe: Naiwny",
        text: "Jaka jest pesymistyczna złożoność czasowa naiwnego algorytmu wyszukiwania wzorca o długości $m$ w tekście o długości $n$?",
        options: [
            { text: "$O((n - m + 1) \\cdot m)$, co w przybliżeniu daje $O(n \\cdot m)$.", isCorrect: true },
            { text: "$O(n + m)$", isCorrect: false },
            { text: "$O(n \\log m)$", isCorrect: false },
            { text: "$O(n)$", isCorrect: false }
        ]
    },
    {
        id: 314,
        category: "Algorytmy Tekstowe: KMP",
        text: "Co eliminuje algorytm Knutha-Morrisa-Pratta w porównaniu z algorytmem naiwnym?",
        options: [
            { text: "Eliminuje konieczność cofania wskaźnika w przeglądanym tekście; tekst jest przeglądany od lewej do prawej bez nawrotów.", isCorrect: true },
            { text: "Eliminuje użycie tablic poprzez haszowanie.", isCorrect: false },
            { text: "Eliminuje potrzebę znania wzorca przed wykonaniem kodu.", isCorrect: false },
            { text: "Omija problem wielkich i małych liter dzięki bitowym shiftom.", isCorrect: false }
        ]
    },

    {
        id: 315,
        category: "Kompresja: Huffman",
        text: "Jakie struktury kodów generuje algorytm kodowania Huffmana?",
        options: [
            { text: "Kody prefiksowe (ang. prefix codes), w których żadne słowo kodowe nie jest przedrostkiem innego, co pozwala na bezbłędne dekodowanie.", isCorrect: true },
            { text: "Kody o stałej długości (stałoblokowe).", isCorrect: false },
            { text: "Słownikowe ciągi rosnące w LZW.", isCorrect: false },
            { text: "Kody ułamkowe dla formatu JPEG.", isCorrect: false }
        ]
    },
    {
        id: 316,
        category: "Algorytmy Równoległe",
        text: "Czym jest PRAM w teorii algorytmów równoległych?",
        options: [
            { text: "PRAM (Parallel Random Access Machine) to abstrakcyjny model komputera z wieloma procesorami współdzielącymi jedną wspólną pamięć główną.", isCorrect: true },
            { text: "Jest to rodzaj pamięci RAM dedykowanej dla algorytmu Quicksort.", isCorrect: false },
            { text: "Przenośny Router Algorytmów Multimedialnych.", isCorrect: false },
            { text: "Programujący Rejestr Adresów Macierzowych.", isCorrect: false }
        ]
    },
    {
        id: 317,
        category: "Algorytmy Geometryczne",
        text: "Do jakiej klasy problemów zalicza się algorytm Grahama?",
        options: [
            { text: "Do problemu znajdowania otoczki wypukłej (Convex Hull) w 2D.", isCorrect: true },
            { text: "Do detekcji cykli w grafach Eulerowskich.", isCorrect: false },
            { text: "Do szukania najkrótszej drogi robota na siatce z przeszkodami.", isCorrect: false },
            { text: "Wyłącznie do zliczania pól powierzchni kół.", isCorrect: false }
        ]
    },
    {
        id: 318,
        category: "Drzewa AVL",
        text: "Kiedy dochodzi do przypadku LL (Left-Left) podczas analizy balansu w drzewie AVL?",
        options: [
            { text: "Gdy lewe poddrzewo danego węzła jest wyższe od prawego o 2 (BF = 2), a nowo wstawiony element trafił do lewego poddrzewa jego lewego dziecka.", isCorrect: true },
            { text: "Gdy nowo wstawiony węzeł jest liściem i ma parzystą wartość klucza.", isCorrect: false },
            { text: "Gdy drzewo posiada tylko lewe gałęzie, niezależnie od wysokości.", isCorrect: false },
            { text: "Gdy korzeń i lewe dziecko mają czarny kolor w reprezentacji mapowanej na RB.", isCorrect: false }
        ]
    },
    {
        id: 319,
        category: "Kopce",
        text: "Ile czasu zajmuje odczytanie największej wartości z kolejki priorytetowej opartej na Max-Heap (bez jej usuwania)?",
        options: [
            { text: "$O(1)$", isCorrect: true },
            { text: "$O(\\log n)$", isCorrect: false },
            { text: "$O(n)$", isCorrect: false },
            { text: "$O(n \\log n)$", isCorrect: false }
        ]
    },
    {
        id: 320,
        category: "Wprowadzenie",
        text: "Co oznacza efektywność (złożoność) czasowa algorytmu rzędu $\\Theta(n)$?",
        options: [
            { text: "Czas wykonania algorytmu rośnie proporcjonalnie do wielkości danych wejściowych $n$ (z dokładnością do stałych).", isCorrect: true },
            { text: "Algorytm musi wykonać dokładnie $n$ operacji niezależnie od kodu.", isCorrect: false },
            { text: "Czas wykonania algorytmu jest zawsze stały.", isCorrect: false },
            { text: "Algorytm działa tylko dla $n$ mniejszego niż 1000.", isCorrect: false }
        ]
    },

    {
        id: 361,
        category: "Złożoność i Notacje Asymptotyczne",
        text: "Które z poniższych definicji poprawnie opisują notacje asymptotyczne?",
        options: [
            { text: "$O(g(n))$ określa asymptotyczne ograniczenie górne (czas pesymistyczny).", isCorrect: true },
            { text: "$\\Omega(g(n))$ określa asymptotyczne ograniczenie dolne (czas optymistyczny).", isCorrect: true },
            { text: "$\\Theta(g(n))$ oznacza, że funkcja rośnie dokładnie w tempie $g(n)$, będąc jednocześnie ograniczoną z góry i z dołu.", isCorrect: true },
            { text: "$O(g(n))$ zawsze oznacza czas średni wykonania algorytmu.", isCorrect: false }
        ]
    },
    {
        id: 362,
        category: "Wprowadzenie: Dowód indukcyjny",
        text: "Z jakich elementów składa się poprawny dowód niezmiennika pętli (loop invariant)?",
        options: [
            { text: "Inicjalizacja: niezmiennik jest prawdziwy przed pierwszą iteracją pętli.", isCorrect: true },
            { text: "Utrzymanie: jeśli niezmiennik jest prawdziwy przed iteracją, to pozostaje prawdziwy przed kolejną.", isCorrect: true },
            { text: "Zakończenie: po zakończeniu pętli niezmiennik daje użyteczną właściwość pomagającą udowodnić poprawność algorytmu.", isCorrect: true },
            { text: "Relaksacja: udowodnienie, że pętla zawsze zmniejsza koszt o $O(1)$.", isCorrect: false }
        ]
    },
    {
        id: 363,
        category: "Algorytmy Sortowania: Wstawianie i Scalanie",
        text: "Które z poniższych twierdzeń o Sortowaniu przez Wstawianie (Insertion Sort) i Scalanie (Merge Sort) są prawdziwe?",
        options: [
            { text: "Insertion Sort działa w czasie optymistycznym $\\Omega(n)$ dla tablic już posortowanych.", isCorrect: true },
            { text: "Merge Sort działa w czasie $\\Theta(n \\log n)$ niezależnie od początkowego uporządkowania danych.", isCorrect: true },
            { text: "Oba algorytmy są stabilne.", isCorrect: true },
            { text: "Oba algorytmy sortują w miejscu (dodatkowa pamięć $O(1)$).", isCorrect: false }
        ]
    },
    {
        id: 364,
        category: "Struktury Danych: Kopce",
        text: "Które własności definiują poprawny kopiec binarny typu Max (Max-Heap)?",
        options: [
            { text: "Drzewo jest prawie pełnym drzewem binarnym wypełnianym od lewej do prawej.", isCorrect: true },
            { text: "Dla każdego węzła $i$ (poza korzeniem) zachodzi $A[Parent(i)] \\ge A[i]$.", isCorrect: true },
            { text: "Lewe dziecko musi być zawsze większe od prawego dziecka.", isCorrect: false },
            { text: "Wysokość kopca zbudowanego z $n$ elementów wynosi $\\Theta(\\log n)$.", isCorrect: true }
        ]
    },
    {
        id: 365,
        category: "Struktury Danych: Liniowe",
        text: "Jakie właściwości i czasy operacji charakteryzują strukturę Stosu (Stack) i Kolejki (Queue)?",
        options: [
            { text: "Stos realizuje strategię LIFO (Last In, First Out).", isCorrect: true },
            { text: "Kolejka realizuje strategię FIFO (First In, First Out).", isCorrect: true },
            { text: "Operacje Push i Pop na stosie można zaimplementować w czasie $O(1)$.", isCorrect: true },
            { text: "Kolejka wymaga czasu $O(n)$ do zdjęcia elementu (Dequeue).", isCorrect: false }
        ]
    },
    {
        id: 366,
        category: "Algorytmy Sortowania: Quicksort",
        text: "Co charakteryzuje algorytm Quicksort według przedstawionych na wykładzie pseudokodów?",
        options: [
            { text: "Opiera się na strategii \"Dziel i zwyciężaj\".", isCorrect: true },
            { text: "Sortuje tablicę w miejscu.", isCorrect: true },
            { text: "Jest algorytm stabilnym w wersji Lomuto.", isCorrect: false },
            { text: "W najgorszym przypadku działa w czasie $\\Theta(n^2)$.", isCorrect: true }
        ]
    },
    {
        id: 367,
        category: "Drzewa BST i RB",
        text: "Które operacje w zbalansowanym drzewie Czerwono-Czarnym (RB) wykonują się w czasie pesymistycznym $O(\\log n)$?",
        options: [
            { text: "Wyszukiwanie elementu (Search).", isCorrect: true },
            { text: "Znalezienie następnika (Successor).", isCorrect: true },
            { text: "Wstawienie elementu (Insert).", isCorrect: true },
            { text: "Usunięcie elementu (Delete).", isCorrect: true }
        ]
    },
    {
        id: 368,
        category: "Tablice Haszujące",
        text: "Które metody są poprawnymi technikami rozwiązywania kolizji w tablicach haszujących?",
        options: [
            { text: "Metoda łańcuchowa (Chaining) przy użyciu list wiązanych.", isCorrect: true },
            { text: "Adresowanie otwarte - liniowe (Linear Probing).", isCorrect: true },
            { text: "Adresowanie otwarte - kwadratowe (Quadratic Probing).", isCorrect: true },
            { text: "Adresowanie bezpośrednie (Direct Addressing).", isCorrect: false }
        ]
    },
    {
        id: 369,
        category: "Algorytmy Grafowe: BFS i DFS",
        text: "Które z poniższych twierdzeń o przeszukiwaniu grafów G(V, E) są prawdziwe?",
        options: [
            { text: "BFS znajduje najkrótsze ścieżki (pod względem liczby krawędzi) z wierzchołka źródłowego.", isCorrect: true },
            { text: "DFS wykorzystuje strukturę kolejki (Queue) do zarządzania odwiedzanymi wierzchołkami.", isCorrect: false },
            { text: "Złożoność czasowa dla reprezentacji listą sąsiedztwa w obu przypadkach wynosi $\\Theta(V + E)$.", isCorrect: true },
            { text: "Sortowanie topologiczne to w praktyce posortowanie wierzchołków względem malejącego czasu wyjścia z algorytmu DFS.", isCorrect: true }
        ]
    },
    {
        id: 370,
        category: "Algorytmy Grafowe: MST",
        text: "Co jest prawdą na temat Minimalnych Drzew Rozpinających (MST) i algorytmów je wyznaczających?",
        options: [
            { text: "Algorytm Kruskala wymaga początkowego posortowania wszystkich krawędzi względem ich wag.", isCorrect: true },
            { text: "Algorytm Prima rozbudowuje jedno połączone drzewo wychodząc z węzła startowego.", isCorrect: true },
            { text: "Drzewo rozpinające dla grafu o $V$ wierzchołkach zawsze zawiera dokładnie $V-1$ krawędzi.", isCorrect: true },
            { text: "Oba algorytmy (Kruskala i Prima) nie radzą sobie z krawędziami o wagach ujemnych.", isCorrect: false }
        ]
    },
    {
        id: 371,
        category: "Algorytmy Grafowe: Najkrótsze Ścieżki",
        text: "Wskaż poprawne zastosowania i cechy algorytmów najkrótszych ścieżek z jednego źródła.",
        options: [
            { text: "Algorytm Dijkstry wymaga krawędzi o wagach nieujemnych.", isCorrect: true },
            { text: "Algorytm Bellmana-Forda potrafi wykryć cykle o ujemnej wadze, z których można osiągnąć cel.", isCorrect: true },
            { text: "W grafach DAG (skierowanych bez cykli) można wyznaczyć najkrótsze ścieżki w czasie $O(V+E)$ dzięki sortowaniu topologicznemu.", isCorrect: true },
            { text: "Algorytm Dijkstry bezwzględnie wymaga struktury kopca Fibonacciego do działania.", isCorrect: false }
        ]
    },
    {
        id: 372,
        category: "Analiza Zamortyzowana",
        text: "W jakich technikach analizy zamortyzowanej przypisuje się niektórym operacjom sztuczne ładunki kosztów (kredyty) w celu pokrycia drogich operacji w przyszłości?",
        options: [
            { text: "W metodzie księgowania (Accounting Method).", isCorrect: true },
            { text: "W metodzie potencjału (Potential Method).", isCorrect: true },
            { text: "W metodzie kosztu sumarycznego (Aggregate Method).", isCorrect: false },
            { text: "W analizie algorytmów równoległych PRAM.", isCorrect: false }
        ]
    },
    {
        id: 373,
        category: "Sieci Przepływowe",
        text: "Które z pojęć wiążą się bezpośrednio z sieciami przepływowymi i algorytmem Forda-Fulkersona?",
        options: [
            { text: "Sieć residualna (Residual Network).", isCorrect: true },
            { text: "Ścieżka powiększająca (Augmenting Path).", isCorrect: true },
            { text: "Minimalny przekrój (Minimum Cut).", isCorrect: true },
            { text: "Drzewo statystyk pozycyjnych (OS-Tree).", isCorrect: false }
        ]
    },
    {
        id: 374,
        category: "Algorytmy Tekstowe",
        text: "Które algorytmy wyszukiwania wzorca w tekście opierają się na wcześniejszym przetwarzaniu wzorca (preprocessing)?",
        options: [
            { text: "Algorytm KMP (Knuth-Morris-Pratt).", isCorrect: true },
            { text: "Algorytm Boyera-Moore'a.", isCorrect: true },
            { text: "Algorytm automatów skończenie stanowych (FSA).", isCorrect: true },
            { text: "Naiwny algorytm wyszukiwania.", isCorrect: false }
        ]
    },
    {
        id: 375,
        category: "Kompresja",
        text: "Które właściwości opisują algorytm kodowania Huffmana?",
        options: [
            { text: "Generuje kody o zmiennej długości (variable-length codes).", isCorrect: true },
            { text: "Tworzy kody prefiksowe (żaden kod nie jest początkiem innego kodu).", isCorrect: true },
            { text: "Wykorzystuje kolejkę priorytetową (Min-Heap) do łączenia najrzadszych węzłów.", isCorrect: true },
            { text: "Jest to kompresja stratna, tracąca detale na rzecz rozmiaru.", isCorrect: false }
        ]
    },
    {
        id: 376,
        category: "Algorytmy Równoległe",
        text: "Zgodnie z taksonomią Flynna, co reprezentuje model MIMD?",
        options: [
            { text: "Wiele strumieni instrukcji i wiele strumieni danych (Multiple Instruction, Multiple Data).", isCorrect: true },
            { text: "Są to zazwyczaj współczesne wielordzeniowe procesory asynchroniczne.", isCorrect: true },
            { text: "Jeden strumień instrukcji na wektorze danych (karty graficzne GPU).", isCorrect: false },
            { text: "Strumień o pojedynczej instrukcji z wieloma odczytami.", isCorrect: false }
        ]
    },
    {
        id: 377,
        category: "Algorytmy Geometryczne",
        text: "W jakich problemach geometrycznych wykorzystuje się iloczyn wektorowy (Cross Product) punktów?",
        options: [
            { text: "Przy określaniu skrętu (lewo/prawo) sekwencji trzech punktów.", isCorrect: true },
            { text: "W algorytmie Grahama do znajdowania otoczki wypukłej.", isCorrect: true },
            { text: "Przy sprawdzaniu czy dwa odcinki na płaszczyźnie się przecinają.", isCorrect: true },
            { text: "Do wyliczania dokładnej odległości w algorytmie najbliższej pary punktów.", isCorrect: false }
        ]
    },
    {
        id: 378,
        category: "Statystyki Pozycyjne",
        text: "Algorytm \"Magicznych Piątek\" służy do:",
        options: [
            { text: "Znalezienia $i$-tej statystyki pozycyjnej w gwarantowanym (pesymistycznym) czasie liniowym $O(n)$.", isCorrect: true },
            { text: "Deterministycznego doboru dobrego elementu osiowego (pivota) dzielącego zbiór w zrównoważonych proporcjach.", isCorrect: true },
            { text: "Kompresji danych z alfabetu pięcioliterowego.", isCorrect: false },
            { text: "Szybkiego wyznaczenia rangi w drzewie OS.", isCorrect: false }
        ]
    },
    {
        id: 379,
        category: "Drzewa Przedziałowe",
        text: "Jakie operacje wspierają dynamiczne drzewa przedziałowe (Interval Trees) oparte o drzewa RB?",
        options: [
            { text: "Wstawienie przedziału w czasie $O(\\log n)$.", isCorrect: true },
            { text: "Usunięcie przedziału w czasie $O(\\log n)$.", isCorrect: true },
            { text: "Poszukiwanie przedziału nakładającego się z zapytaniem w czasie $O(\\log n)$.", isCorrect: true },
            { text: "Znajdowanie wszystkich przecięć odcinków na płaszczyźnie 2D w czasie stałym.", isCorrect: false }
        ]
    },
    {
        id: 380,
        category: "Sortowanie Liniowe",
        text: "Co ogranicza algorytmy sortowania w czasie liniowym (Counting Sort, Radix Sort, Bucket Sort)?",
        options: [
            { text: "Nie wykonują one bezpośrednich porównań (np. operatora < lub >) między wartościami elementów w celu wyznaczenia porządku.", isCorrect: true },
            { text: "Counting sort wymaga asympotycznie dużej pamięci, jeśli zakres danych $k$ jest ogromny.", isCorrect: true },
            { text: "Bucket sort wymaga, by wejściowe liczby pochodziły z rozkładu jednostajnego na pewnym przedziale.", isCorrect: true },
            { text: "Wszystkie muszą operować na liczbach zmiennoprzecinkowych.", isCorrect: false }
        ]
    },
    {
        id: 381,
        category: "Złożoność Obliczeniowa",
        text: "Rozważ algorytm, który składa się z 3 zagnieżdżonych pętli 'for' od 1 do $n$. W najgłębszej pętli wykonuje operację w czasie $O(\\log n)$. Jaka jest asymptotyczna złożoność algorytmu?",
        options: [
            { text: "$\\Theta(n^3 \\log n)$", isCorrect: true },
            { text: "$\\Theta(n \\log^3 n)$", isCorrect: false },
            { text: "$\\Theta(n^3)$", isCorrect: false },
            { text: "$\\Theta(n^4)$", isCorrect: false }
        ]
    },
    {
        id: 382,
        category: "Drzewa BST",
        text: "Z jakich pod-operacji składa się zarys procedury usuwania węzła mającego dwoje dzieci z drzewa BST?",
        options: [
            { text: "Odszukanie następnika usuwanego węzła (minimum w jego prawym poddrzewie).", isCorrect: true },
            { text: "Skopiowanie klucza z następnika do usuwanego węzła.", isCorrect: true },
            { text: "Usunięcie następnika z jego pierwotnej pozycji.", isCorrect: true },
            { text: "Przesunięcie korzenia całego drzewa na miejsce usuwanego elementu.", isCorrect: false }
        ]
    },
    {
        id: 383,
        category: "Listy Przeskakiwania",
        text: "Które zdania rzetelnie opisują strukturę Skip List (Listy z przeskokami)?",
        options: [
            { text: "Elementy w liście przeskakiwania zawsze pozostają posortowane na poziomie najniższym (bazowym).", isCorrect: true },
            { text: "Każdy węzeł posiada losowo wyznaczoną wysokość (liczbę wskaźników do przodu).", isCorrect: true },
            { text: "Złożoność pamięciowa Skip Listy wynosi oczekiwane $O(n)$.", isCorrect: true },
            { text: "Skip Lista używa krawędzi powrotnych do optymalizacji szukania w tył.", isCorrect: false }
        ]
    },
    {
        id: 384,
        category: "Tablice Haszujące",
        text: "Co jest prawdą na temat haszowania przez mnożenie?",
        options: [
            { text: "Wzór to $h(k) = \\lfloor m (k \\cdot A \\bmod 1) \\rfloor$.", isCorrect: true },
            { text: "Wartość $A$ musi być stałą z przedziału $(0, 1)$.", isCorrect: true },
            { text: "Zaletą metody mnożenia jest to, że rozmiar tablicy $m$ nie musi być liczbą pierwszą.", isCorrect: true },
            { text: "Metoda ta w ogóle nie generuje kolizji.", isCorrect: false }
        ]
    },
    {
        id: 385,
        category: "Algorytmy Grafowe",
        text: "W jakiej formie matematycznej można przedstawić graf do analizy algorytmicznej?",
        options: [
            { text: "Macierz sąsiedztwa (Adjacency Matrix).", isCorrect: true },
            { text: "Listy sąsiedztwa (Adjacency Lists).", isCorrect: true },
            { text: "Zbiór wierzchołków $V$ i krawędzi $E$ jako $G=(V, E)$.", isCorrect: true },
            { text: "Jako funkcję $T(n) = aT(n/b) + f(n)$.", isCorrect: false }
        ]
    },
    {
        id: 386,
        category: "Algorytmy Grafowe: Krawędzie",
        text: "Zgodnie z klasyfikacją DFS, które rodzaje krawędzi tworzą cykl w grafie skierowanym?",
        options: [
            { text: "Krawędzie powrotne (Back edges).", isCorrect: true },
            { text: "Krawędzie poprzeczne (Cross edges).", isCorrect: false },
            { text: "Krawędzie w przód (Forward edges).", isCorrect: false },
            { text: "Krawędzie drzewowe (Tree edges).", isCorrect: false }
        ]
    },
    {
        id: 387,
        category: "Najkrótsze ścieżki",
        text: "Który algorytm używa struktury d-kopca (lub kopca binarnego/Fibonacciego) jako trzonu optymalizacyjnego?",
        options: [
            { text: "Algorytm Dijkstry.", isCorrect: true },
            { text: "Algorytm Prima.", isCorrect: true },
            { text: "Algorytm Bellmana-Forda.", isCorrect: false },
            { text: "Algorytm Floyda-Warshalla.", isCorrect: false }
        ]
    },
    {
        id: 388,
        category: "Najkrótsze ścieżki",
        text: "Co oznacza operacja 'Relaksacji' krawędzi $(u, v)$ z wagą $w$?",
        options: [
            { text: "Sprawdzenie, czy szacowana odległość do $v$ jest większa od odległości do $u$ powiększonej o wagę krawędzi $(u,v)$.", isCorrect: true },
            { text: "Jeżeli test relaksacji przechodzi pomyślnie, to uaktualnienie odległości $d[v] = d[u] + w(u,v)$ i ustalenie $u$ jako poprzednika $v$.", isCorrect: true },
            { text: "Operacja ma na celu usunięcie cykli z grafu.", isCorrect: false },
            { text: "Zawsze modyfikuje wagę krawędzi na zero.", isCorrect: false }
        ]
    },
    {
        id: 389,
        category: "Złożoność: O(1) Amortyzowane",
        text: "Które z podanych struktur wykonują podane operacje w średnim czasie amortyzowanym $O(1)$?",
        options: [
            { text: "Wstawienie (Push/Append) elementu na koniec tablicy dynamicznej podwajającej rozmiar.", isCorrect: true },
            { text: "Operacje na strukturze zbiorów rozłącznych z kompresją ścieżki i heurystyką rangi (ścisłe zbliżenie do $O(1)$ przy założeniu $O(\\alpha(n))$).", isCorrect: true },
            { text: "Multipop na stosie.", isCorrect: true },
            { text: "Znalezienie elementu z najmniejszym kluczem w drzewie BST.", isCorrect: false }
        ]
    },
    {
        id: 390,
        category: "Sieci Przepływowe",
        text: "W sieci residualnej $G_f$ w algorytmie Forda-Fulkersona przepustowość krawędzi powrotnej $c_f(v, u)$ dla krawędzi grafu $(u, v)$ wynosi:",
        options: [
            { text: "Zawsze dokładnie tyle, ile przepływu zostało posłane krawędzią $(u,v)$, tzn. $f(u,v)$.", isCorrect: true },
            { text: "Zawsze $0$.", isCorrect: false },
            { text: "$c(u, v) - f(u, v)$.", isCorrect: false },
            { text: "Dokładnie tyle co pojemność $c(u, v)$.", isCorrect: false }
        ]
    },
    {
        id: 391,
        category: "Algorytmy Tekstowe",
        text: "Który algorytm opiera się na sumie algebraicznej (haszu) okna ślizgającego się po tekście?",
        options: [
            { text: "Algorytm Rabina-Karpa.", isCorrect: true },
            { text: "Algorytm Knutha-Morrisa-Pratta.", isCorrect: false },
            { text: "Algorytm Boyera-Moore'a.", isCorrect: false },
            { text: "Kodowanie LZW.", isCorrect: false }
        ]
    },
    {
        id: 392,
        category: "Algorytmy Tekstowe",
        text: "Na czym polega zasada działania Automatu Skończenie Stanowego do wyszukiwania wzorców?",
        options: [
            { text: "Funkcja przejścia $\\delta$ zależy wyłącznie od obecnego stanu i kolejnego odczytanego z tekstu znaku.", isCorrect: true },
            { text: "Czas sprawdzania (bez czasu budowy automatu) jest liniowy względem długości tekstu, $\\Theta(n)$.", isCorrect: true },
            { text: "Stan akceptujący to stan $m$, gdzie $m$ to długość szukanego wzorca.", isCorrect: true },
            { text: "Wymaga nawrotów na czytanym tekście przy wystąpieniu błędów.", isCorrect: false }
        ]
    },
    {
        id: 393,
        category: "Kompresja Danych",
        text: "W drzewie kodowania Huffmana, na czym polega metoda zachłanna wyboru?",
        options: [
            { text: "W każdym kroku z kolejki wyciągane są dwa węzły o najmniejszej częstości występowania i tworzony jest z nich nowy węzeł wewnętrzny.", isCorrect: true },
            { text: "W każdym kroku sortujemy krawędzie od najcięższej do najlżejszej.", isCorrect: false },
            { text: "Zawsze po lewej stronie umieszcza się samogłoski.", isCorrect: false },
            { text: "Wykorzystuje rotacje po zaalokowaniu nowego symbolu.", isCorrect: false }
        ]
    },
    {
        id: 394,
        category: "Algorytmy Równoległe",
        text: "Model architektury wieloprocesorowej PRAM dzieli się na kategorie ze względu na konflikty dostępu do współdzielonej pamięci. Wskaż poprawne:",
        options: [
            { text: "EREW - brak współbieżności odczytów i brak współbieżności zapisów w tej samej komórce.", isCorrect: true },
            { text: "CREW - jednoczesne czytanie dozwolone, jednoczesne pisanie do tej samej komórki zakazane.", isCorrect: true },
            { text: "CRCW - jednoczesne czytanie i jednoczesne pisanie dozwolone (wymagany jest protokół np. priorytetowy lub wspólnej wartości).", isCorrect: true },
            { text: "PRAM nie posiada dzielonej pamięci, każdy procesor ma wyłącznie własną lokalną.", isCorrect: false }
        ]
    },
    {
        id: 395,
        category: "Algorytmy Równoległe",
        text: "Które algorytmy można zrównoleglić używając modelu PRAM?",
        options: [
            { text: "Wyszukiwanie minimum w tablicy (np. metodą turniejową/drzewem redukcji).", isCorrect: true },
            { text: "Obliczanie sumy prefiksowej tablicy (Prefix Sum).", isCorrect: true },
            { text: "Ustalanie rangi elementów na powiązanej liście (Pointer Jumping).", isCorrect: true },
            { text: "Szeregowanie instrukcji w SISD.", isCorrect: false }
        ]
    },
    {
        id: 396,
        category: "Algorytmy Geometryczne",
        text: "Złożoność algorytmu Grahama znajdowania otoczki wypukłej to:",
        options: [
            { text: "$O(n \\log n)$, co jest zdominowane przez sortowanie punktów ze względu na ich kąty biegunowe.", isCorrect: true },
            { text: "$O(n)$, ponieważ iteracja przez stos odbywa się w czasie liniowym.", isCorrect: false },
            { text: "$O(n^2)$, z powodu użycia metody zamiatania.", isCorrect: false },
            { text: "$O(1)$, gdy tablica jest posortowana kwadratowo.", isCorrect: false }
        ]
    },
    {
        id: 397,
        category: "Wprowadzenie do algorytmów",
        text: "Co oznacza, że algorytm sortowania wykonuje się w miejscu (in-place)?",
        options: [
            { text: "Wymaga co najwyżej stałej $\\Theta(1)$ pamięci dodatkowej (poza tablicą wejściową), ewentualnie $O(\\log n)$ na stos wywołań w wariancie Quicksort.", isCorrect: true },
            { text: "Wykonuje się w dokładnie jednym określonym węźle procesora.", isCorrect: false },
            { text: "Gwarantuje ten sam stan elementów dublujących po posortowaniu.", isCorrect: false },
            { text: "Nie wykonuje żadnej instrukcji swap.", isCorrect: false }
        ]
    },
    {
        id: 398,
        category: "Sortowanie Kopcowe",
        text: "Jaki węzeł jest rodzicem dla węzła o indeksie 7 w reprezentacji tablicowej kopca (indeksowanej od 1)?",
        options: [
            { text: "Węzeł o indeksie 3.", isCorrect: true },
            { text: "Węzeł o indeksie 2.", isCorrect: false },
            { text: "Węzeł o indeksie 4.", isCorrect: false },
            { text: "Węzeł o indeksie 6.", isCorrect: false }
        ]
    },
    {
        id: 399,
        category: "Zbiory Dynamiczne",
        text: "Jakie są podstawowe operacje w dynamicznym zbiorze (słowniku)?",
        options: [
            { text: "Wyszukiwanie (Search).", isCorrect: true },
            { text: "Wstawianie (Insert).", isCorrect: true },
            { text: "Usuwanie (Delete).", isCorrect: true },
            { text: "Rotacja Lewostronna (Rotate-Left).", isCorrect: false }
        ]
    },
    {
        id: 400,
        category: "Grafy: Reprezentacje",
        text: "Gdzie preferuje się użycie list sąsiedztwa nad macierzą sąsiedztwa w algorytmice?",
        options: [
            { text: "W grafach rzadkich (gdzie $|E| \\ll |V|^2$), ponieważ ich pamięć operacyjna to $\\Theta(V+E)$ zamiast $\\Theta(V^2)$.", isCorrect: true },
            { text: "W algorytmach wymagających iterowania po wszystkich sąsiadach danego węzła.", isCorrect: true },
            { text: "Tam, gdzie wymagane jest błyskawiczne ($O(1)$) zapytanie, czy konkretna krawędź $(u,v)$ istnieje.", isCorrect: false },
            { text: "W algorytmie Floyda-Warshalla wyliczającym wszystkie ścieżki.", isCorrect: false }
        ]
    },
    {
        id: 401,
        category: "Pseudokod: Quicksort",
        text: "W klasycznej wersji Quicksort (na podziale Lomuto z ostatnim elementem jako pivot), jakie są wartości indeksów dla wywołań rekurencyjnych, jeżeli punkt podziału zwrócił wartość $q$?",
        options: [
            { text: "`Quicksort(A, p, q - 1)` oraz `Quicksort(A, q + 1, r)`", isCorrect: true },
            { text: "`Quicksort(A, p, q)` oraz `Quicksort(A, q + 1, r)`", isCorrect: false },
            { text: "`Quicksort(A, p, q - 1)` oraz `Quicksort(A, q, r)`", isCorrect: false },
            { text: "`Quicksort(A, p, q)` oraz `Quicksort(A, q, r)`", isCorrect: false }
        ]
    },
    {
        id: 402,
        category: "Pseudokod: Quicksort (Hoare)",
        text: "Jeśli jako mechanizmu partycjonującego w Quicksort użyjemy pseudokodu Hoare'a, to wywołania rekurencyjne muszą wyglądać inaczej. Jak?",
        options: [
            { text: "`Quicksort(A, p, q)` oraz `Quicksort(A, q + 1, r)`", isCorrect: true },
            { text: "Procedura Hoare'a nie daje pewności, że element $q$ jest już na stałym miejscu, a dzieli zbiór na strefę elementów $\\le$ od pivota i $\\ge$ od pivota.", isCorrect: true },
            { text: "`Quicksort(A, p, q - 1)` oraz `Quicksort(A, q + 1, r)` tak samo jak w Lomuto.", isCorrect: false },
            { text: "Procedura Hoare zwraca zawsze wartość $r$ z podtablicy.", isCorrect: false }
        ]
    },
    {
        id: 403,
        category: "Pseudokod: Merge Sort",
        text: "Co charakteryzuje instrukcję `mid = floor((left + right) / 2)` w pseudokodzie sortowania przez scalanie (Merge Sort)?",
        options: [
            { text: "Rozdziela tablicę w gwarantowany sposób symetryczny, by zredukować wysokość wywołań do $\\log_2 n$.", isCorrect: true },
            { text: "Zabezpiecza podział z uniknięciem pętli nieskończonej przez operację funkcji podłogi (floor).", isCorrect: true },
            { text: "Wylicza medianę z elementów w tablicy tak jak w algorytmie Quickselect.", isCorrect: false },
            { text: "Może przekroczyć zakres tablicy dla typów ujemnych.", isCorrect: false }
        ]
    },
    {
        id: 404,
        category: "Twierdzenie o Rekurencji Uniwersalnej",
        text: "Dla algorytmu opisanego równaniem $T(n) = 4T(n/2) + n^2$, które oszacowanie jest poprawne, zgodnie z którym przypadkiem Master Theorem?",
        options: [
            { text: "Należy do Przypadku 2, w którym funkcja zrównuje się asymptotycznie z $n^{\\log_b a} = n^2$, a więc daje złożoność $\\Theta(n^2 \\log n)$.", isCorrect: true },
            { text: "Daje to przypadek 1 i wynik $\\Theta(n^2)$.", isCorrect: false },
            { text: "Daje to przypadek 3 z wynikiem $O(n^3)$.", isCorrect: false },
            { text: "Twierdzenia nie można na tym równaniu użyć.", isCorrect: false }
        ]
    },
    {
        id: 405,
        category: "Kopce: Build-Heap",
        text: "Jaki jest precyzyjnie rozpisany powód z sumarycznego kosztu amortyzacji, że `Build-Heap` wykonuje się w zaledwie $O(n)$?",
        options: [
            { text: "Koszt procedury `Heapify` rośnie wraz z odległością w dół od liści. Liści jest bardzo dużo (około $n/2$) i naprawa ich zajmuje czas 0. Rodziców liści (poziom 1) jest $n/4$ i ich naprawa zajmuje 1 krok, rodziców na poziomie 2 jest $n/8$ a ich czas to 2 itd. Zbieżny szereg geometryczny sum tych nakładów $\\sum \\frac{h}{2^h}$ ustala się z wynikiem granicznym dla $O(n)$.", isCorrect: true },
            { text: "Build-Heap ignoruje w ogóle liście i wykonuje tylko obrót dwóch węzłów szczytowych.", isCorrect: false },
            { text: "Dzieje się tak, ponieważ wykorzystywane jest haszowanie zamiast swap.", isCorrect: false },
            { text: "W najgorszym scenariuszu wykonuje $n \\log n$ operacji, ale statystycznie zawsze mniej, dając $O(n)$.", isCorrect: false }
        ]
    },
    {
        id: 406,
        category: "Kolejki Priorytetowe: Extract-Max",
        text: "Kiedy wykonamy operację `Heap-Extract-Max` z poprawnie zbudowanego kopca, który element z tablicy $A$ zostaje fizycznie skopiowany do indeksu korzenia ($A[1]$) przez algorytm i z jakiego powodu?",
        options: [
            { text: "Kopiowany jest element z ostatniego używanego miejsca tablicy (`A[A.heapsize]`), ponieważ musimy zachować ciągłość bloków i skrócić rozmiar kopca o 1, a ten element jest jedynym liściem bezpiecznym do przemieszczenia i ponownego \"zanurzenia\" z `Max-Heapify` w dół.", isCorrect: true },
            { text: "W lewe miejsce korzenia wstawiany jest prawy potomek dla rotacji zbalansowanej.", isCorrect: false },
            { text: "Korzeń nadpisywany jest elementem mniejszym tylko z gałęzi posiadającej maksymalne z obu jego dzieci.", isCorrect: false },
            { text: "Korzeń jest po prostu fizycznie oznaczany flagą `NIL` i zrzucany.", isCorrect: false }
        ]
    },
    {
        id: 407,
        category: "Sortowanie w Czasie Liniowym: Counting Sort",
        text: "Jeśli sortowane elementy należą do przedziału $1 \\dots k$, gdzie $k = O(n^3)$, jaka będzie złożoność czasowa procedury Counting Sort w notacji $O$?",
        options: [
            { text: "$O(n^3)$.", isCorrect: true },
            { text: "Złożoność wynosi $O(n + k)$, co przy $k=n^3$ upraszcza się do dominanty $O(n^3)$.", isCorrect: true },
            { text: "Czas liniowy $O(n)$.", isCorrect: false },
            { text: "$O(n \\log n)$ ze względu na brak możliwości zliczania na dużych kluczach.", isCorrect: false }
        ]
    },
    {
        id: 408,
        category: "Sortowanie w Czasie Liniowym: Radix Sort",
        text: "Jeżeli mamy do posortowania tablicę wejściową za pomocą algorytmu Radix Sort. Cyfry po których odbywają się iteracje wyliczane są ze stałą bazą $b$. Czego użyjemy w głównej pętli algorytmu, żeby zrealizować wymagania stabilności dla przejścia przez dane?",
        options: [
            { text: "Wyłącznie stabilnego sortowania pomocniczego, takiego jak np. Counting Sort.", isCorrect: true },
            { text: "Quicksorta dla zapewnienia pamięci na miejscu.", isCorrect: false },
            { text: "Procedury Heapsort z podwójnym odwracaniem kopca.", isCorrect: false },
            { text: "Zrandomizowanego sortowania szybkiego.", isCorrect: false }
        ]
    },
    {
        id: 409,
        category: "Listy: Wstawianie",
        text: "Co w pseudokodzie dodawania nowego węzła przed głowę podwójnie wiązanej listy `List-Insert(L, x)` robi linia `x.next = L.head` oraz `L.head.prev = x`?",
        options: [
            { text: "Powodują one poprawną asymilację z dotychczasowym zbiorem. Następnik $x$ wskazuje na dawną głowę, a stara głowa swoim znacznikiem 'poprzedni' przyjmuje element $x$.", isCorrect: true },
            { text: "Zrywają całkowicie referencje niszcząc listę dla rekurencji usunięć.", isCorrect: false },
            { text: "Linia jest niekompletna, wskaźniki podwójnie wiązane posiadają 4 wektory.", isCorrect: false },
            { text: "Ta instrukcja to błąd, należy użyć operacji wymuszonej `Heapify`.", isCorrect: false }
        ]
    },
    {
        id: 410,
        category: "Drzewa BST: Przypadki Skrajne",
        text: "Gdy dla drzewa BST o wysokości rzędu $O(n)$ wykonamy sekwencyjnie i w odpowiedniej konfiguracji kluczy serię $m$ operacji Insert. Jak kształtuje się koszt wszystkich wyszukiwań i wstawień łącznie?",
        options: [
            { text: "Koszt całkowity tej serii wyniesie asympotycznie pesymistyczne $O(m \\cdot n)$ w przypadku narastającego drzewa do struktury prostej listy (zdegenerowania).", isCorrect: true },
            { text: "Koszt wyniesie logarytmicznie ograniczone $O(m \\log n)$.", isCorrect: false },
            { text: "Czas jest amortyzowany do jedności i da $O(n)$.", isCorrect: false },
            { text: "Drzewo zrebalansuje się pod procedurą ukrytą na szczycie.", isCorrect: false }
        ]
    },
    {
        id: 411,
        category: "Drzewa Czerwono-Czarne (RB): Insert",
        text: "W analizie wstawiania do drzew Czerwono-Czarnych `RB-Insert` istnieje faza 'naprawcza' w pętli. Który z Przypadków naprawczych w RB powoduje przemieszczenie koloru CZERWONEGO w górę drzewa, ryzykując pojawienie się problemu z powrotem o poziom wyżej, lecz NIE wykonując przy tym ani jednej fizycznej rotacji?",
        options: [
            { text: "Przypadek 1 (Case 1), gdzie nowo wstawiony element $x$ ma czerwonego rodzica oraz Czerwonego wujka $y$. Dziadek zostaje zabarwiony na czerwono, a ojcowie na czarno, zaś sam problem przerzucony zostaje do dziadka bez dotykania wskaźników węzłów.", isCorrect: true },
            { text: "Przypadek 2, charakteryzujący się tzw. ułożeniem w zygzak i generujący rotację do wyciągnięcia węzła ojca.", isCorrect: false },
            { text: "Przypadek 3, z ułożeniem węzłów w linii wymuszający natychmiastową podwójną zmianę ze standardową rotacją i zakończeniem cyklu wstawki.", isCorrect: false },
            { text: "Przypadek usunięcia i odbudowy symetrycznej u spodu z podniesieniem krawędzi poprzecznych.", isCorrect: false }
        ]
    },
    {
        id: 412,
        category: "Listy Przeskakiwania: Skip Lists",
        text: "Pseudokod operacji wyszukiwania na liście Skip-List (Search) w głównej pętli schodzi od poziomu najwyższego `list.level` w dół do poziomu 1. Co następuje w pętli wewnątrz dla danego poziomu $i$?",
        options: [
            { text: "Program przechodzi poziomo wzdłuż poziomu do przodu `while (x.forward[i].key < key)` wykorzystując fakt bycia przeskoczonym, skracając dystans bez schodzenia jeszcze do dołu.", isCorrect: true },
            { text: "Węzeł zostaje uwięziony i odrzuca wynik gdy tylko natrafi na wskaźnik zwrotny.", isCorrect: false },
            { text: "Losuje i odpytuje kostkę matematyczną dla zweryfikowania wysokości z poziomu logarytmu.", isCorrect: false },
            { text: "Z każdym taktem pętla zmienia funkcję na `x = x.prev`.", isCorrect: false }
        ]
    },
    {
        id: 413,
        category: "Haszowanie Otwarte: Pseudokod Delete",
        text: "Dla poprawnego funkcjonowania operacji `HASH-DELETE` i braku unieruchamiania pętli dla szukanej ścieżki (Search) za użyciem skrótów, w algorytmach rozwiązanych poprzez Adresowanie Otwarte element z tablicy usunięty jest jak?",
        options: [
            { text: "Miejsce zajęte przez dany klucz ustala się do specjalnej wirtualnej wartości stałej w pamięci `DELETED` - na tej podstawie pętla wyszukiwawcza wie by ominąć te miejsce z powrotem odczytując hash dalej.", isCorrect: true },
            { text: "Procedura nadpisuje go standardowym atrybutem `NIL`, ponieważ komórki wolne zawsze kończą szukanie dla wektora równego w kluczu.", isCorrect: false },
            { text: "Element kasuje i zmniejsza tablicę realokując ją ponownie.", isCorrect: false },
            { text: "Nie wspierają one wcale procedury Delete przez ryzyko tzw. Kolizji Obwiedniej.", isCorrect: false }
        ]
    },
    {
        id: 414,
        category: "Haszowanie Z Łańcuchowaniem",
        text: "Dlaczego użycie funkcji w Haszowaniu z Łańcuchowaniem (Chained Hash) w średnim, w pełni wylosowanym układzie dla m rozmiarów ma złożoność wyszukiwań średnich jako stałą $\\Theta(1+\\alpha)$?",
        options: [
            { text: "Termin $\\alpha$ (tzw. wsp. wypełnienia tablicy: $n/m$) dyktuje średnią i proporcjonalną z matematyki zliczeń oczekiwaną długość każdej wiszącej na węźle listy, którą algorytm w pesymizmie przechodzi na czas wyszukiwania uderzając za hashem na stałej cenie wskaźnika $\\Theta(1)$.", isCorrect: true },
            { text: "Ponieważ każdy element łączy się podwójnie do wektora wyznaczając stałe czasy.", isCorrect: false },
            { text: "Ponieważ $\\alpha$ decyduje z rzędu wagi tablicowej za $m$, redukując problem kolizji.", isCorrect: false },
            { text: "Czas w haszu z listą zawsze będzie bezsprzecznie logarytmem $\\Theta(\\log n)$.", isCorrect: false }
        ]
    },
    {
        id: 415,
        category: "Statystyki Pozycyjne: Randomized Select",
        text: "W jaki sposób procedura podziału i sprawdzenia (`Randomized-Select(A, p, r, i)`) oszacowuje i określa rekurencyjnie pozycję sprawdzanego i szukanego przedziału `$i$-tego elementu` w ujętej podtablicy?",
        options: [
            { text: "Wylicza z użyciem operatora $k = q - p + 1$ naturalny offset wektora pivota względem startu lewego indeksu p. Jeśli $i == k$ to odnaleźliśmy element; a jeśli offset $i < k$ szukamy w przedziale na połówce z dołu i przeciwnie na połówce w górę.", isCorrect: true },
            { text: "Dzieli on elementy przy wykorzystaniu wskaźników z Heapify.", isCorrect: false },
            { text: "Zależność $i$ wyznaczana jest losowo przy każdej wywołanej gałęzi rekurencji.", isCorrect: false },
            { text: "Porównuje wielkość wejściową podtablic z użyciem algorytmu Radix.", isCorrect: false }
        ]
    },
    {
        id: 416,
        category: "Dynamiczne Statystyki Pozycyjne: OS-Tree",
        text: "Jak zdefiniowana jest metoda OS-Select(x, i) we wzorcowym kodzie wyszukiwania dla $i$-tej struktury u wierzchołków Czerwono-Czarnych z wdrożonym atrybutem wielkości `$size$`?",
        options: [
            { text: "Ustala rangę wyjściową korzenia obliczoną z atrybutów jako $r = x.left.size + 1$. Gdy $i == r$ znaleziono cel. Jeśli $i < r$ rekursja uderza w poddrzewo z lewej z zapytaniem z identycznym argumentem $i$, dla strony przeciwnej odejmuje szukaną z $r$: wywołując prawe z $i - r$.", isCorrect: true },
            { text: "Szuka poprzez dodawanie z atrybutu `rank` i odejmowanie wartości z prawych rzutów bez iteracji.", isCorrect: false },
            { text: "Zwraca jedynie lewostronny wynik pod kątem tablicy sumarycznej rozmiarów przedziału.", isCorrect: false },
            { text: "Oblicza zawsze $r = size/2$ na połowach zrównoważonych drzew do końca logarytmu.", isCorrect: false }
        ]
    },
    {
        id: 417,
        category: "Drzewa Przedziałowe: Pseudokod",
        text: "Gdy w pseudokodzie operacji zapytań u `Interval-Search(T, i)` przejdziemy poprawnie przed obniżeniem się po lewej na gałąź przy rozdzielającym warunku co następuje dla opcji odrzuconej z weryfikacją by poszła do $Right(x)$?",
        options: [
            { text: "Ścieżka uderzy do prawego poddrzewa jeśli i tylko jeśli lewe poddrzewo i węzeł pusty jest `NIL` ALBO węzeł po stronie wskaźnikowej z góry przechowuje uaktualnioną wartość `$max$` mniejszą niż `$i.low$` dla szukanego odcinka.", isCorrect: true },
            { text: "Warunek zawsze idzie do prawej gałęzi omijając cykl DFS na obrotach.", isCorrect: false },
            { text: "Wynika on tylko ze sprawdzenia relacji z polem min, omijanym przez atrybut $i.high$.", isCorrect: false },
            { text: "Jeśli wartość z węzła korzeniowego będzie równa 0 i usunie pętlę.", isCorrect: false }
        ]
    },
    {
        id: 418,
        category: "Grafy Reprezentacja: DFS",
        text: "W jaki formalny sposób odbywa się określenie znacznika ukończenia dla algorytmu `DFS-Visit(u)` nadzorującego czasy $d[u]$ oraz $f[u]$ i zmieniający kolory dla grafów wejściowych w Cormenie?",
        options: [
            { text: "Znacznik i flaga czasowa ukończenia wejścia nakładana jest na końcu metody; zmieniona ze znacznika czasowego do tablicy $f[u]$ tuż przed przekolorowaniem go po ostatecznych odwiedzinach i zmazaniu wszystkich podgałęzi na status $BLACK$ w celu finalnego domknięcia drogi w drzewie DFS.", isCorrect: true },
            { text: "Procedura $d[u]$ zastępuje i oznacza wierzchołek od wejścia u góry kolorem Czerwonym i zamyka jego drogi.", isCorrect: false },
            { text: "W procedurze znajduje się wymóg do oznaczeń tylko powrotnych Back-edges pomijając wpis na koniec z pętlą stałych.", isCorrect: false },
            { text: "Algorytm zapisuje i nadpisuje wartość nieskończoności dla wierzchołka $u$ podczas pętli szukania wektorów na wprost by zamienić flagę.", isCorrect: false }
        ]
    },
    {
        id: 419,
        category: "Grafy: Algorytm Bellmana-Forda",
        text: "Czego wynikiem jest instrukcja `if d[v] > d[u] + w(u, v) return FALSE` w ostatniej, sprawdzającej za ewentualnymi zmianami, pętli pseudo-kodu operacji algorytmu Bellmana-Forda na najkrótszych wejściach dróg w relaksacji?",
        options: [
            { text: "To sprawdzenie wychwytuje błędy matematyczne cyklów; po udanym przejściu optymalnym krawędzi $V-1$ razy, każda obniżona relaksacja potwierdza ujemny i domykający obrót nieskończoności dla cyklu – co oddaje wynik procedury False na zdeklarowanie błędu pod wagami z ujemnym wektorem cyklicznym dla osiągalnego z s krawędzi układu wejścia.", isCorrect: true },
            { text: "Jest to test heurystyczny i sprawdzanie błędnej asymetrii dla krawędzi ucinając drogę bez szans w czasie stałym A*.", isCorrect: false },
            { text: "Przeszukuje i relaksuje on wszystkie negatywne krawędzie dodając wynik jako tablice.", isCorrect: false },
            { text: "Wykrywa i odwraca on kierunek zapisu pętli bez powrotu do korzenia przy wyjęciu wartości tablicy z grafu.", isCorrect: false }
        ]
    },
    {
        id: 420,
        category: "Grafy: Dijkstry Kruczki Złożoności",
        text: "Jaki jest precyzyjny warunek obniżenia z czasowej gęstości w procedurze Dijkstry przy założeniach że $E \\ll V^2$ z listami sąsiedztw do implementacji w strukturze o minimalnym wyjęciu Fibonacciego w grafach?",
        options: [
            { text: "W implementacjach, pętla wykonuje stałe $|V|$ ściągnięć Extract-Min. Operacje aktualizacji (Decrease-Key) dzieją się podczas pętli we wnętrzu i zdarzyć mogą się maksymalnie dla wszystkich krawędzi $|E|$. Użycie Fibonacciego (czas amortyzowany $O(1)$) do Decrease-Key oraz operacja Extract w czasie $\\log V$ zbija cały prąd wejść do $\\Theta(V \\log V + E)$.", isCorrect: true },
            { text: "Gwarantuje on czas liniowy za pomocą wbudowanych stosów macierzy, bo $|V|$ wyjęć jest bez kosztów na BFS.", isCorrect: false },
            { text: "Dla gęstych grafów kopiec Fibonacciego ucieka pod potęgę rzędu dwójki i jest asymetrycznie lepszy dla zapisu drzew AVL w macierz kwadratową by uniknąć $E \\log V$.", isCorrect: false },
            { text: "Jest to niemożliwe dla Dijkstry do zbicia w czasie ułamka bez wierzchołków dla wagi równej.", isCorrect: false }
        ]
    },
    {
        id: 421,
        category: "Grafy: Kruskal na Union-Find",
        text: "Co wynika i staje się w ciele metody operacyjnej Kruskala w chwili gdy zbiór dwóch końców dla testowanej drogi z rzutu najmniejszych kosztów na Find-Set ujawni zgodność wejść na równy indeks (`Find-Set(u) == Find-Set(v)`)?",
        options: [
            { text: "Pętla omija krawędź bez żadnych modyfikacji i zmian, zapobiegając ujęciu i wprowadzeniu w domykający drzewo MST destruktywny ujemny obieg i zamykający element - cykl.", isCorrect: true },
            { text: "Wymusza na krawędziach relaksację z przypisaniem nowych ujemnych wag by cofnąć się na połówki do przodu.", isCorrect: false },
            { text: "Cofana jest zmienna w pętli bez powrotu co przelicza rzuty Kruskala.", isCorrect: false },
            { text: "W tym momencie usuwa węzeł dla zmniejszenia skali lasu dla struktury MST.", isCorrect: false }
        ]
    },
    {
        id: 422,
        category: "Grafy: Warshall-Floyd",
        text: "Zapis potrójnej iteracyjnej tablicy z użyciem mechaniki dynamicznej dla programu algorytmu Floyda-Warshalla wyłuskuje uwarunkowanie wyliczeń dróg pośrednich za każdym razem dla trasy na skrótach w indeksie `k`. Jak wygląda wewnętrzna pętla tego przypisania dla minimalnej odległości od `i` do `j` w `D`?",
        options: [
            { text: "D_ij^(k) wyznaczana jest przez porównanie, co jest u spodu najmniejsze: $D_{ij}^{(k-1)}$ czy ucięcie przez krawędź węzła pośredniego w nowej drodze $D_{ik}^{(k-1)} + D_{kj}^{(k-1)}$. Wartość ta zastępuje wiersze by utrzymać stan bieżący pod indeksowaną macierz wyjść w $O(V^3)$.", isCorrect: true },
            { text: "Dodaje rzut po zminimalizowaniu w tablicy ujemnych wielkości po bokach trójkątów dla wagi $w$.", isCorrect: false },
            { text: "Sprowadza się pod potrójne i niezależne przeszukiwania i odwrócenia list dla węzła na wyjściu by powielać je.", isCorrect: false },
            { text: "Modyfikuje ścieżki i powroty wyliczając drogi krzyżowe z $O(E)$ i rzucając BFS.", isCorrect: false }
        ]
    },
    {
        id: 423,
        category: "Sieci Przepływowe: Algorytm",
        text: "Pojemność (wartość krawędzi) rezydualna ścieżki powiększającej do punktu ujęcia $p$ definiuje o ile można zmienić aktualny ułamek przypływu dla grafu residualnego w ciele wewnątrz while algorytmu. Jak owa ścieżka i wartość jest wybierana na węzłach?",
        options: [
            { text: "Jest równa wyłącznie minimalnej i brzegowej pojemności residualnej na wszystkich branych i sprawdzanych z góry pod krawędzie leżących w $p$. Ucinając i gwarantując ucieczkę prądu przez przepustowość w $c_f(p) = \\min\\{c_f(u,v) \\mid (u,v) \\in p\\}$.", isCorrect: true },
            { text: "Wynosi równe maksimum z przypisania drogi najwęższej i dopuszcza dodanie wagi bez ograniczeń na pojemności.", isCorrect: false },
            { text: "Jest średnią dla drogi pod ujście w całym oknie poszukiwań Forda.", isCorrect: false },
            { text: "Zależy tylko i wyłącznie od wartości krawędzi startowej na styku z źródłem z odjęciem drogi pod ujście.", isCorrect: false }
        ]
    },
    {
        id: 424,
        category: "Maksymalne Skrzyżowania (Bipartite)",
        text: "Redukcja, adaptacja i implementacja zagadnienia dróg powiązania dla Maksymalnego Skojarzenia Grafów Dwudzielnych w oparciu o wejściowe kody przepływu polega na procedurze modyfikującej wyliczenia z użyciem Edmondsa Karpa w tym, że:",
        options: [
            { text: "Z każdej gałęzi super-źródła $s$ do elementu z węzłów w lewej stronie $L$ poprowadzony zostaje ułamek skierowany z pojemnością dla 1 ($c = 1$). Od prawej składowej w krawędzi wychodzącej w prawo do super-ujścia $t$ pociągnięta zostaje gałąź o doliczeniu pojemności identycznie na 1.", isCorrect: true },
            { text: "Usuwa w całości wszystkie ujemne przepływy z bazy z ucięciami i ustawieniem pod stały układ 0 by uniknąć zapętleń w pętlach krzyżujących BFS.", isCorrect: false },
            { text: "Pod każdą gałąź rzuca relaksację by ukrócić drzewo AVL do 2 dróg przeliczonych dla zliczeń.", isCorrect: false },
            { text: "W całości jest tylko mitem bez przełożenia do grafów dla Bellmana-Forda o stałym $c = \\infty$.", isCorrect: false }
        ]
    },
    {
        id: 425,
        category: "Algorytmy Tekstowe: Wzorzec Rabin-Karp",
        text: "Z jakich równań wielomianowych i pętli pozycjonującej przesuwa okno pod wektorem $s+1$ funkcja pętli zdejmująca ze środka stary człon `t_s` w algorytmie Rabina-Karpa przed wykonaniem ułamkowego modulo?",
        options: [
            { text: "Równanie podtrzymuje $t_{s+1} = (d(t_s - T[s+1]h) + T[s+m+1]) \\bmod q$. Najpierw likwiduje odciętą u góry największą literę okna ze skrótem (pomnożoną przez $h=d^{m-1}$), dodaje na puste zera za znakiem, powiększa wartość po przesunięciu okna o wymiary, wciąga i dodaje wyższą najmłodszą na sam koniec literę a dopiero po tych działaniach używa moduł by domknąć cykl wielomianu pod ramy zmiennych $q$.", isCorrect: true },
            { text: "Używa sum z macierzy przy użyciu algorytmu bitowego o podmienionych wektorach wyrazu bez dzielników co ucina puste zera z tablicy prefiksu.", isCorrect: false },
            { text: "Sprawdza dla skrótów całe wyrazy od początku, z pominięciem mnożnika dla bazy wektorów $d$.", isCorrect: false },
            { text: "To fałsz, metoda nie korzysta ze zmiennej modulo dla żadnego przypisanego wzoru.", isCorrect: false }
        ]
    },
    {
        id: 426,
        category: "Algorytmy Tekstowe: Wzorzec Zły Znak Boyera Moore'a",
        text: "Jeżeli na algorytm Boyera-Moore'a, i pod heurystykę tablic Złego Znaku uderzy niedopasowanie między sprawdzanymi ciągami gdzie litera wejściowa dla bazy z testu i tekstu pod spodem ułożonego z `T` nie pojawia się ani razu we wnętrzu i składni całego słowa we wzorcu. Jak reaguje i postępuje algorytm po ucięciu?",
        options: [
            { text: "Wzorzec zostaje pominięty na dystans i wysunięty z pominięciem go od razu tak, aby jego prawy i najbliższy z lewej kraniec początkowy na ułożeniu pokrył się jako rzuty za i pozycjonował się ze znakiem tekstowym odczytanym na odrzucie i fałszu. To pozwala na największy pewny w wymiarze skok za jednym odczytem równy wektorom całej skali wymiaru tekstu (przeskok na długość całego wzorca).", isCorrect: true },
            { text: "Program wycofuje rzut na okna o długości 1, jak w metodach naiwnych, w celu uniknięcia pominięcia.", isCorrect: false },
            { text: "Wybiera skok opierający się tylko na zduplikowanej funkcji przejść z procedur Automatu dla KMP by skopiować.", isCorrect: false },
            { text: "Wraca do pierwszego miejsca we wzorcu i przesuwa pętle w przód o podwójne odczyty iteracji po osi tekstu.", isCorrect: false }
        ]
    },
    {
        id: 427,
        category: "Algorytmy Równoległe (PRAM): Szukanie Max w O(1)",
        text: "Ciekawy sposób i paradoksalny rzut z wielkiego narzutu sprzętowego procesorów do znalezienia maksymalnej dla zbioru wielkości dla struktury w stałym czasie dających wynik $\\Theta(1)$ operuje w trybie dla modelu CRCW. Jakie składowe dla matrycy logicznej w tym podanym wyżej modelu umożliwiają taką realizację z zignorowaniem kwadratu ilości bitów?",
        options: [
            { text: "Przydzielając maszynie o n wkładach asynchronicznych aż $n^2$ w układzie procesorów PRAM dla sprawdzania każdego jednego dla każdego po osi. Wynik z wejścia po ułożeniu jako odrzut logicznego i negatywnego warunku 'jeśli jakikolwiek procesor z bazy rzuci wartość mniejszą' u piszących z nadpisaniem po CRCW. Puste zmienne w binarnej reprezentacji ujawniają że maksymalną bez porównania dla wyższej jest ułamek i wartość bez zapisów we współdzielonych rejestrach flagi.", isCorrect: true },
            { text: "Wyznaczając strukturę równoległą ucinając sortowanie Hoare'a co 1 cykl maszyn dających wynik za użyciem LIFO.", isCorrect: false },
            { text: "Model ułożony jest o EREW wykluczając zapis asynchroniczny z jednoczesną realizacją odczytu wektora pod kątami kwadratu z tablic.", isCorrect: false },
            { text: "Dzieląc macierz u układów z odległości 2 dla wyrazu ułożonego z wejść procesora master wykluczając pozycje z podwójnej w ułamku z u.", isCorrect: false }
        ]
    },
    {
        id: 428,
        category: "Algorytmy Geometryczne: Otoczki wektorowe",
        text: "Przy wejściu na pętle by wyłowić i określić ułożenie z lewej przed wpisaniem na wektor przez Grahama zdejmującą i analizującą punkty na kątach, czym dokładnie na wektorach dla macierzy posługuje się miara wewnątrz wektorów?",
        options: [
            { text: "Korzysta do policzenia miary punktu z determinanty podanej wzorem skrętu równej wartości krzyżowego z wierzchołków dla określenia wielkości dającej dodatnią skrzywioną trajektorię odczytaną na wierzchołkach: z iloczynu $(x_2-x_1)(y_3-y_1) - (x_3-x_1)(y_2-y_1)$ determinując zakręt pod ułożenie z ominiętym trygonometrem z funkcji.", isCorrect: true },
            { text: "Oblicza funkcje kąta sinus pod boki trójkąta od punktów ominiętymi na wymiarze kwadratowym i rzucając pętlę na wektor i wyrzuceniem wartości skrajnie obróconej do 0.", isCorrect: false },
            { text: "Zakłada sprawdzenia punktów równe rzutowi do połówki boku na długości wektora by wykreślić je do kwadratu bazy.", isCorrect: false },
            { text: "Wylicza rzut promienia kątowego i obraca w pętlach o ułamek $180$ dla macierzy wektora kwadratowego we współrzędnych.", isCorrect: false }
        ]
    },
    {
        id: 429,
        category: "Algorytmy Geometryczne: Liniowe Przecięcia Zamiatania",
        text: "Status wektora dla pod kątami prostej z Zamiatania dla Miotły w problemach płaszczyzny Sweep Line dla wykrycia przecięć odcinków przechowywany i ustrukturyzowany jest na podbudowie Drzewa RB z pewnymi modyfikacjami dla czasu i zapisu w pionie dla rzutów:",
        options: [
            { text: "Status przechwytuje obiekty i podtrzymuje sekwencyjne ułożenie przeciętych krawędzi, i sortuje w pionie na moment postawionej linii dla ostatecznego drzewa ujętego wokół $O(\\log n)$ rzucając wynik we wspólnym dla rzutów w przód pod zapytania z sąsiadami u spodu i węzłami obok wektora Miotły przy $X$.", isCorrect: true },
            { text: "Stanowi on kolejną oddzielną kolejkę pod wyrzuceniem z czasowych barier przy zapytaniu i przejeździe Miotły.", isCorrect: false },
            { text: "Dopasowuje i usuwa węzły wyrzucając całe pod-zbiory na wektor ze stosu bez zapisywania w tablicach wyliczonych z u.", isCorrect: false },
            { text: "Sortuje elementy za listą w ułamkach przed pętlą dla znalezienia podziału bez z użyciem Drzew z wagi i obrotem Y.", isCorrect: false }
        ]
    },
    {
        id: 430,
        category: "Analiza Algorytmów: Amortyzowane (Stos Multipop)",
        text: "Wyliczenie analityczne i potencjały matematyczne przy stosie wyjętych hurtowo przez instrukcje Multipop bazują dla długu i zadośćuczynienia na ułożeniu jakich argumentacji i wag?",
        options: [
            { text: "Na wykorzystaniu kredytów doliczanych (i płaconych nadmiarowo np. jako stawka $2$ zamiast $1$) na bieżąco podczas wpisania pod wierzch węzłów w poleceniach Push. Przy ściągnięciu ułamek na wstawce zostaje uwolniony i nadpłacony fundusz dla multipop wyjętego dla wielkich pętli gwarantuje amortyzowane opłacenie z limitem dając stałą średnią $\\Theta(1)$ pod ostatecznie wykonane zadania wyrzucania k elementów po operacji zebranych opłat ułożonych przed wierzchołkami stosu.", isCorrect: true },
            { text: "Z uwagi na wektory puste pomija się koszty Multipop zostawiając stałą wagę wywołania dla funkcji stosu o wartości $\\infty$.", isCorrect: false },
            { text: "Potencjał stosu wymusza zapętlenie do stałej ilości na 5 w wejściowych blokach ucięć bez wpisania wartości za pobranie z wektora.", isCorrect: false },
            { text: "Dla operacji Pop ujęcie amortyzacji oparte z tablic haszujących zakłada że pętla wykona się najwolniej i da podniesienie $\\Omega(n)$ jako wynik w modelu rzutu wektora.", isCorrect: false }
        ]
    },
    {
        id: 431,
        category: "Wprowadzenie",
        text: "Co to jest algorytm zgodnie z definicją z wykładów?",
        options: [
            { text: "Skończony ciąg jasno zdefiniowanych czynności koniecznych do rozwiązania danego problemu.", isCorrect: true },
            { text: "Program komputerowy napisany w języku C++ lub Python.", isCorrect: false },
            { text: "Zbiór danych przechowywanych w pamięci operacyjnej.", isCorrect: false },
            { text: "Nieskończona pętla operacji arytmetycznych.", isCorrect: false }
        ]
    },
    {
        id: 432,
        category: "Złożoność Obliczeniowa",
        text: "Jakie są dwa główne kryteria oceny dobrego algorytmu?",
        options: [
            { text: "Poprawność (zwraca prawidłowy wynik).", isCorrect: true },
            { text: "Efektywność (zużywa minimalną ilość czasu i pamięci).", isCorrect: true },
            { text: "Krótkość kodu źródłowego.", isCorrect: false },
            { text: "Brak użycia rekurencji.", isCorrect: false }
        ]
    },
    {
        id: 433,
        category: "Złożoność Obliczeniowa",
        text: "Czym jest złożoność pamięciowa algorytmu?",
        options: [
            { text: "Ilością dodatkowej pamięci potrzebnej do wykonania zadania, wyrażoną jako funkcja rozmiaru danych wejściowych.", isCorrect: true },
            { text: "Czasem potrzebnym na zapisanie danych na dysk twardy.", isCorrect: false },
            { text: "Rozmiarem pliku wykonywalnego na dysku.", isCorrect: false },
            { text: "Ilością linii kodu pseudokodu.", isCorrect: false }
        ]
    },
    {
        id: 434,
        category: "Notacje Asymptotyczne",
        text: "Co oznacza zapis $f(n) = O(g(n))$?",
        options: [
            { text: "Funkcja $g(n)$ jest asymptotycznym ograniczeniem górnym funkcji $f(n)$.", isCorrect: true },
            { text: "Funkcja $f(n)$ rośnie szybciej niż $g(n)$.", isCorrect: false },
            { text: "Funkcja $g(n)$ jest asymptotycznym ograniczeniem dolnym funkcji $f(n)$.", isCorrect: false },
            { text: "Obie funkcje rosną w dokładnie tym samym tempie.", isCorrect: false }
        ]
    },
    {
        id: 435,
        category: "Notacje Asymptotyczne",
        text: "Co oznacza zapis $f(n) = \\Omega(g(n))$?",
        options: [
            { text: "Funkcja $g(n)$ jest asymptotycznym ograniczeniem dolnym funkcji $f(n)$.", isCorrect: true },
            { text: "Określa optymistyczny scenariusz działania algorytmu.", isCorrect: true },
            { text: "Zawsze gwarantuje, że algorytm wykona się w czasie stałym.", isCorrect: false },
            { text: "Oznacza dokładne oszacowanie czasu działania.", isCorrect: false }
        ]
    },

    // --- SORTOWANIA OPARTE NA PORÓWNANIACH ---
    {
        id: 436,
        category: "Sortowanie przez wstawianie",
        text: "Jaka jest złożoność czasowa sortowania przez wstawianie (Insertion Sort) w optymistycznym przypadku?",
        options: [
            { text: "$O(n)$", isCorrect: true },
            { text: "$O(n \\log n)$", isCorrect: false },
            { text: "$O(n^2)$", isCorrect: false },
            { text: "$O(1)$", isCorrect: false }
        ]
    },
    {
        id: 437,
        category: "Sortowanie przez wstawianie",
        text: "Czy algorytm Insertion Sort sortuje w miejscu (in-place)?",
        options: [
            { text: "Tak, wymaga tylko $O(1)$ dodatkowej pamięci.", isCorrect: true },
            { text: "Nie, wymaga dodatkowej tablicy o rozmiarze $n$.", isCorrect: false },
            { text: "Tak, wymaga pamięci $O(\\log n)$ na stos wywołań.", isCorrect: false },
            { text: "Nie, wymaga tablicy rozmiaru $k$ do zliczania.", isCorrect: false }
        ]
    },
    {
        id: 438,
        category: "Merge Sort",
        text: "Jaka jest główna technika (strategia) wykorzystywana w sortowaniu przez scalanie (Merge Sort)?",
        options: [
            { text: "Dziel i zwyciężaj (Divide and Conquer).", isCorrect: true },
            { text: "Programowanie dynamiczne.", isCorrect: false },
            { text: "Algorytm zachłanny.", isCorrect: false },
            { text: "Programowanie liniowe.", isCorrect: false }
        ]
    },
    {
        id: 439,
        category: "Merge Sort",
        text: "Jaka jest złożoność pamięciowa algorytmu Merge Sort?",
        options: [
            { text: "$O(n)$ ze względu na tablice pomocnicze przy scalaniu.", isCorrect: true },
            { text: "$O(1)$", isCorrect: false },
            { text: "$O(\\log n)$", isCorrect: false },
            { text: "$O(n^2)$", isCorrect: false }
        ]
    },
    {
        id: 440,
        category: "Quicksort",
        text: "Jakie jest najgorsze (pesymistyczne) ograniczenie czasowe dla algorytmu Quicksort?",
        options: [
            { text: "$O(n^2)$", isCorrect: true },
            { text: "$O(n \\log n)$", isCorrect: false },
            { text: "$O(n)$", isCorrect: false },
            { text: "$O(n^3)$", isCorrect: false }
        ]
    },
    {
        id: 441,
        category: "Quicksort",
        text: "Które zdanie najlepiej opisuje działanie procedury Partition w Quicksort?",
        options: [
            { text: "Dzieli ona tablicę na dwie części: elementy mniejsze (lub równe) pivotowi i elementy większe od pivota.", isCorrect: true },
            { text: "Scala ona dwie posortowane tablice w jedną.", isCorrect: false },
            { text: "Znajduje największy element i umieszcza go na końcu.", isCorrect: false },
            { text: "Wykrywa medianę w czasie liniowym.", isCorrect: false }
        ]
    },
    {
        id: 442,
        category: "Teoria Sortowań",
        text: "Jakie jest dolne ograniczenie złożoności dla wszystkich algorytmów sortowania opartych na porównaniach?",
        options: [
            { text: "$\\Omega(n \\log n)$", isCorrect: true },
            { text: "$\\Omega(n)$", isCorrect: false },
            { text: "$\\Omega(n^2)$", isCorrect: false },
            { text: "$\\Omega(1)$", isCorrect: false }
        ]
    },

    // --- SORTOWANIE W CZASIE LINIOWYM ---
    {
        id: 443,
        category: "Counting Sort",
        text: "Jaka jest złożoność czasowa sortowania przez zliczanie (Counting Sort) przy tablicy $n$-elementowej o wartościach z zakresu $0$ do $k$?",
        options: [
            { text: "$\\Theta(n + k)$", isCorrect: true },
            { text: "$\\Theta(n \\log n)$", isCorrect: false },
            { text: "$\\Theta(n^2)$", isCorrect: false },
            { text: "$\\Theta(k \\log n)$", isCorrect: false }
        ]
    },
    {
        id: 444,
        category: "Radix Sort",
        text: "Z jakiego algorytmu pomocniczego (jako podprocedury) zazwyczaj korzysta sortowanie pozycyjne (Radix Sort)?",
        options: [
            { text: "Sortowania przez zliczanie (Counting Sort).", isCorrect: true },
            { text: "Quicksortu.", isCorrect: false },
            { text: "Algorytmu Prima.", isCorrect: false },
            { text: "Sortowania bąbelkowego.", isCorrect: false }
        ]
    },
    {
        id: 445,
        category: "Bucket Sort",
        text: "Dla jakich danych wejściowych algorytm Bucket Sort działa najszybciej (osiąga średni czas $O(n)$)?",
        options: [
            { text: "Dla danych losowych z rozkładu jednostajnego na przedziale $[0, 1)$.", isCorrect: true },
            { text: "Dla danych odwrotnie posortowanych.", isCorrect: false },
            { text: "Dla małego zbioru unikalnych liczb całkowitych.", isCorrect: false },
            { text: "Tylko dla danych w postaci ciągów tekstowych.", isCorrect: false }
        ]
    },

    // --- STRUKTURY LINIOWE: STOS, KOLEJKA, LISTA ---
    {
        id: 446,
        category: "Zbiory Dynamiczne: Stos",
        text: "Jaka jest złożoność operacji Push i Pop w prawidłowo zaimplementowanym stosie (Stack)?",
        options: [
            { text: "$O(1)$", isCorrect: true },
            { text: "$O(n)$", isCorrect: false },
            { text: "$O(\\log n)$", isCorrect: false },
            { text: "Zależy to od rozmiaru elementów na stosie.", isCorrect: false }
        ]
    },
    {
        id: 447,
        category: "Zbiory Dynamiczne: Kolejka",
        text: "Czym charakteryzuje się problem 'underflow' (niedomiaru) w kolejce lub stosie?",
        options: [
            { text: "Próbą usunięcia elementu (Dequeue/Pop) ze struktury, która jest już pusta.", isCorrect: true },
            { text: "Próbą wstawienia elementu do pełnej struktury.", isCorrect: false },
            { text: "Przekroczeniem maksymalnej wartości klucza Integer.", isCorrect: false },
            { text: "Błędem indeksowania w tablicy dynamicznej.", isCorrect: false }
        ]
    },
    {
        id: 448,
        category: "Listy Dowiązane",
        text: "Jaka jest pesymistyczna złożoność wyszukiwania konkretnej wartości w jednokierunkowej liście wiązanej?",
        options: [
            { text: "$O(n)$", isCorrect: true },
            { text: "$O(1)$", isCorrect: false },
            { text: "$O(\\log n)$", isCorrect: false },
            { text: "$O(n \\log n)$", isCorrect: false }
        ]
    },

    // --- KOPCE I KOLEJKI PRIORYTETOWE ---
    {
        id: 449,
        category: "Kopce: Reprezentacja",
        text: "Jeśli kopiec binarny jest reprezentowany przez tablicę indeksowaną od 1, to gdzie znajduje się prawy potomek węzła o indeksie $i$?",
        options: [
            { text: "Pod indeksem $2i + 1$.", isCorrect: true },
            { text: "Pod indeksem $2i$.", isCorrect: false },
            { text: "Pod indeksem $\\lfloor i/2 \\rfloor$.", isCorrect: false },
            { text: "Pod indeksem $i + 2$.", isCorrect: false }
        ]
    },
    {
        id: 450,
        category: "Kolejki Priorytetowe",
        text: "Które z wymienionych operacji są typowe dla Kolejki Priorytetowej typu Max?",
        options: [
            { text: "Insert", isCorrect: true },
            { text: "Maximum", isCorrect: true },
            { text: "Extract-Max", isCorrect: true },
            { text: "Increase-Key", isCorrect: true }
        ]
    },
    {
        id: 451,
        category: "Kolejki Priorytetowe",
        text: "Jaki jest czas działania operacji `Extract-Max` w oparciu o standardowy kopiec binarny?",
        options: [
            { text: "$O(\\log n)$", isCorrect: true },
            { text: "$O(1)$", isCorrect: false },
            { text: "$O(n)$", isCorrect: false },
            { text: "$O(n \\log n)$", isCorrect: false }
        ]
    },

    // --- DRZEWA BST I RB ---
    {
        id: 452,
        category: "Drzewa BST",
        text: "Jaka właściwość definiuje Binarne Drzewo Poszukiwań (BST)?",
        options: [
            { text: "Dla każdego węzła $x$, wszystkie klucze w jego lewym poddrzewie są $\\le x.key$, a w prawym poddrzewie $\\ge x.key$.", isCorrect: true },
            { text: "Drzewo musi być zawsze idealnie zbalansowane.", isCorrect: false },
            { text: "Węzły nie mogą mieć dwojga dzieci.", isCorrect: false },
            { text: "Korzeń przechowuje zawsze najmniejszą wartość.", isCorrect: false }
        ]
    },
    {
        id: 453,
        category: "Drzewa BST",
        text: "Z jaką złożonością działają operacje Wyszukiwania, Wstawiania i Usuwania w BST w najgorszym (pesymistycznym) przypadku?",
        options: [
            { text: "$O(n)$ - gdy drzewo ulegnie degeneracji do postaci listy.", isCorrect: true },
            { text: "$O(\\log n)$ - zawsze.", isCorrect: false },
            { text: "$O(1)$ - gdy znamy wskaźnik na korzeń.", isCorrect: false },
            { text: "$O(n \\log n)$", isCorrect: false }
        ]
    },
    {
        id: 454,
        category: "Drzewa Czerwono-Czarne (RB)",
        text: "Jaki kolor musi mieć nowy liść $NIL$ dodawany na dno drzewa RB?",
        options: [
            { text: "Czarny.", isCorrect: true },
            { text: "Czerwony.", isCorrect: false },
            { text: "Zależy od koloru rodzica.", isCorrect: false },
            { text: "Biały.", isCorrect: false }
        ]
    },
    {
        id: 455,
        category: "Drzewa Czerwono-Czarne (RB)",
        text: "Czym jest 'Czarna Wysokość' (Black-Height) węzła $x$ w drzewie RB?",
        options: [
            { text: "Liczbą czarnych węzłów na dowolnej prostej ścieżce od $x$ (bez $x$) do liścia $NIL$.", isCorrect: true },
            { text: "Sumą wszystkich czarnych węzłów w lewym poddrzewie $x$.", isCorrect: false },
            { text: "Liczbą czerwonych węzłów odjętą od liczby czarnych węzłów.", isCorrect: false },
            { text: "Maksymalną głębokością drzewa.", isCorrect: false }
        ]
    },

    // --- HASZOWANIE ---
    {
        id: 456,
        category: "Tablice Haszujące",
        text: "Na czym polega adresowanie bezpośrednie (Direct Addressing)?",
        options: [
            { text: "Klucz jest bezpośrednio używany jako indeks w tablicy (np. $A[k] = element$).", isCorrect: true },
            { text: "Wszystkie klucze lądują na jednej liście wiązanej.", isCorrect: false },
            { text: "Każdy element wymaga przejścia przez 3 funkcje haszujące.", isCorrect: false },
            { text: "Klucz jest szyfrowany algorytmem SHA-256.", isCorrect: false }
        ]
    },
    {
        id: 457,
        category: "Tablice Haszujące",
        text: "Co charakteryzuje adresowanie otwarte w tablicach haszujących?",
        options: [
            { text: "Wszystkie elementy są przechowywane wewnątrz samej tablicy, nie ma żadnych zewnętrznych list wiązanych.", isCorrect: true },
            { text: "Kolizje rozwiązuje się przez znalezienie kolejnego pustego slotu (np. sondowanie liniowe).", isCorrect: true },
            { text: "Jest to inna nazwa na metodę łańcuchową.", isCorrect: false },
            { text: "Współczynnik wypełnienia (load factor) może wynosić więcej niż 1.", isCorrect: false }
        ]
    },
    {
        id: 458,
        category: "Tablice Haszujące",
        text: "Jakie sondowanie (probing) generuje problem 'pierwotnego grupowania' (primary clustering)?",
        options: [
            { text: "Sondowanie liniowe (Linear Probing).", isCorrect: true },
            { text: "Sondowanie kwadratowe (Quadratic Probing).", isCorrect: false },
            { text: "Podwójne haszowanie (Double Hashing).", isCorrect: false },
            { text: "Metoda łańcuchowa (Chaining).", isCorrect: false }
        ]
    },
    {
        id: 459,
        category: "Haszowanie",
        text: "Czym jest 'współczynnik wypełnienia' (load factor) $\\alpha$ dla tablicy haszującej o rozmiarze $m$ przechowującej $n$ elementów?",
        options: [
            { text: "$\\alpha = n / m$", isCorrect: true },
            { text: "$\\alpha = m / n$", isCorrect: false },
            { text: "$\\alpha = n \\bmod m$", isCorrect: false },
            { text: "$\\alpha = m - n$", isCorrect: false }
        ]
    },

    // --- SKIP LISTY I STATYSTYKI ---
    {
        id: 460,
        category: "Skip Lists",
        text: "Jakie operacje wspiera Skip List w oczekiwanym czasie $O(\\log n)$?",
        options: [
            { text: "Wyszukiwanie, wstawianie i usuwanie elementu.", isCorrect: true },
            { text: "Tylko wyszukiwanie.", isCorrect: false },
            { text: "Znalezienie minimalnego drzewa rozpinającego.", isCorrect: false },
            { text: "Sortowanie tablicy wejściowej.", isCorrect: false }
        ]
    },
    {
        id: 461,
        category: "Statystyki Pozycyjne",
        text: "Która statystyka pozycyjna zbioru odpowiada Minimum, a która Maksimum?",
        options: [
            { text: "Minimum to 1-sza statystyka pozycyjna.", isCorrect: true },
            { text: "Maksimum to $n$-ta statystyka pozycyjna.", isCorrect: true },
            { text: "Minimum to $n$-ta statystyka pozycyjna.", isCorrect: false },
            { text: "Maksimum to 0-ta statystyka pozycyjna.", isCorrect: false }
        ]
    },
    {
        id: 462,
        category: "Dynamiczne Statystyki Pozycyjne",
        text: "Jakie dodatkowe pole przechowuje węzeł w drzewie statystyk pozycyjnych (OS-Tree)?",
        options: [
            { text: "Pole `size`, oznaczające liczbę węzłów w poddrzewie o korzeniu w tym węźle (włączając sam węzeł).", isCorrect: true },
            { text: "Pole `height`, przechowujące wysokość poddrzewa.", isCorrect: false },
            { text: "Pole `hash`, dla szybkiego dostępu O(1).", isCorrect: false },
            { text: "Pole `max`, dla określenia największego klucza.", isCorrect: false }
        ]
    },

    // --- DRZEWA PRZEDZIAŁOWE ---
    {
        id: 463,
        category: "Drzewa Przedziałowe",
        text: "Co służy jako główny klucz sortowania węzłów w Drzewie Przedziałowym (Interval Tree)?",
        options: [
            { text: "Dolny kraniec przedziału ($interval.low$).", isCorrect: true },
            { text: "Górny kraniec przedziału ($interval.high$).", isCorrect: false },
            { text: "Środek przedziału.", isCorrect: false },
            { text: "Rozmiar (długość) przedziału.", isCorrect: false }
        ]
    },
    {
        id: 464,
        category: "Drzewa Przedziałowe",
        text: "Co przechowuje dodatkowy atrybut `max` w węźle Drzewa Przedziałowego?",
        options: [
            { text: "Największą wartość górnego krańca przedziału (high) spośród wszystkich przedziałów w poddrzewie tego węzła.", isCorrect: true },
            { text: "Największy dolny kraniec przedziału w lewym poddrzewie.", isCorrect: false },
            { text: "Maksymalną ilość przedziałów krzyżujących się w jednym punkcie.", isCorrect: false },
            { text: "Maksymalną wysokość poddrzewa czarnego.", isCorrect: false }
        ]
    },

    // --- GRAFY: WPROWADZENIE ---
    {
        id: 465,
        category: "Grafy: Reprezentacja",
        text: "W jakich przypadkach reprezentacja grafu jako Macierz Sąsiedztwa (Adjacency Matrix) jest najbardziej opłacalna?",
        options: [
            { text: "Gdy graf jest gęsty (liczba krawędzi $|E|$ jest bliska $|V|^2$).", isCorrect: true },
            { text: "Gdy chcemy bardzo szybko sprawdzać, czy istnieje krawędź między konkretnymi wierzchołkami $u$ i $v$.", isCorrect: true },
            { text: "Gdy zależy nam na oszczędności pamięci przy grafach rzadkich.", isCorrect: false },
            { text: "Gdy używamy algorytmu Kruskala.", isCorrect: false }
        ]
    },
    {
        id: 466,
        category: "Grafy: BFS",
        text: "Czego wynikiem jest działanie algorytmu Przeszukiwania Wszerz (BFS) ze źródła $s$?",
        options: [
            { text: "Drzewa rozpinającego (BFS-tree) zawierającego najkrótsze ścieżki pod względem liczby krawędzi od $s$ do każdego osiągalnego wierzchołka.", isCorrect: true },
            { text: "Posortowanej topologicznie listy wierzchołków.", isCorrect: false },
            { text: "Minimalnego Drzewa Rozpinającego (MST) dla wag ujemnych.", isCorrect: false },
            { text: "Ciągu krawędzi powrotnych w DAG.", isCorrect: false }
        ]
    },
    {
        id: 467,
        category: "Grafy: DFS",
        text: "Jakie struktury lub koncepcje czasowe przypisuje algorytm DFS (Przeszukiwanie w Głąb) każdemu odwiedzonemu wierzchołkowi?",
        options: [
            { text: "Czas odkrycia $d[v]$ (discovery time).", isCorrect: true },
            { text: "Czas zakończenia $f[v]$ (finish time).", isCorrect: true },
            { text: "Dystans z użyciem relaksacji $dist[v]$.", isCorrect: false },
            { text: "Pozycję w kolejce priorytetowej.", isCorrect: false }
        ]
    },
    {
        id: 468,
        category: "Grafy: Sortowanie Topologiczne",
        text: "Na jakim typie grafów można przeprowadzić Sortowanie Topologiczne?",
        options: [
            { text: "Tylko na Skierowanych Grafach Acyklicznych (DAG).", isCorrect: true },
            { text: "Na dowolnych grafach nieskierowanych.", isCorrect: false },
            { text: "Na grafach zawierających cykle o ujemnych wagach.", isCorrect: false },
            { text: "Na Drzewach Czerwono-Czarnych.", isCorrect: false }
        ]
    },
    {
        id: 469,
        category: "Grafy: Sortowanie Topologiczne",
        text: "Jaki krok wykonuje się po przeprowadzeniu DFS, by uzyskać porządek topologiczny?",
        options: [
            { text: "Odkłada się wierzchołki na początek listy powiązanej (linked list) w momencie, gdy są całkowicie przetworzone (czas wyjścia $f[u]$).", isCorrect: true },
            { text: "Sortuje się je rosnąco po czasie wejścia $d[u]$.", isCorrect: false },
            { text: "Wywołuje się procedurę Heap-Extract-Max na czasach $d[u]$.", isCorrect: false },
            { text: "Obraca się krawędzie i uruchamia BFS.", isCorrect: false }
        ]
    },

    // --- GRAFY: MST ---
    {
        id: 470,
        category: "Minimalne Drzewo Rozpinające (MST)",
        text: "Co to jest Minimalne Drzewo Rozpinające (MST) dla spójnego grafu ważonego?",
        options: [
            { text: "Jest to podzbiór krawędzi bez cykli, który łączy wszystkie wierzchołki, przy czym suma wag tych krawędzi jest najmniejsza z możliwych.", isCorrect: true },
            { text: "Jest to drzewo najkrótszych ścieżek od zadanego korzenia do innych węzłów.", isCorrect: false },
            { text: "Jest to graf po usunięciu wszystkich ujemnych krawędzi.", isCorrect: false },
            { text: "Jest to podgraf zawierający tylko jeden najmniejszy cykl.", isCorrect: false }
        ]
    },
    {
        id: 471,
        category: "MST: Algorytm Prima",
        text: "Jakie struktury danych stosuje się do optymalnej implementacji algorytmu Prima?",
        options: [
            { text: "Kolejkę priorytetową (Min-Heap lub Kopiec Fibonacciego).", isCorrect: true },
            { text: "Zwykłą kolejkę FIFO.", isCorrect: false },
            { text: "Zbiory Rozłączne (Union-Find).", isCorrect: false },
            { text: "Drzewa Przedziałowe.", isCorrect: false }
        ]
    },
    {
        id: 472,
        category: "MST: Algorytm Kruskala",
        text: "Jak działa algorytm Kruskala?",
        options: [
            { text: "Sortuje krawędzie od najmniejszej wagi, a następnie zachłannie dodaje je do lasu, o ile nie tworzą cyklu.", isCorrect: true },
            { text: "Wybiera wierzchołek początkowy i dodaje najtańsze krawędzie z niego wychodzące.", isCorrect: false },
            { text: "Działa w oparciu o mnożenie macierzy wag.", isCorrect: false },
            { text: "Relaksuje krawędzie w celu ominięcia ujemnych cykli.", isCorrect: false }
        ]
    },
    {
        id: 473,
        category: "Struktury Zbiorów Rozłącznych (Disjoint Sets)",
        text: "Które z poniższych są dwiema kluczowymi heurystykami przyspieszającymi operacje na zbiorach rozłącznych (np. w algorytmie Kruskala)?",
        options: [
            { text: "Łączenie według rangi (Union by rank).", isCorrect: true },
            { text: "Kompresja ścieżki (Path compression).", isCorrect: true },
            { text: "Haszowanie dwukrotne.", isCorrect: false },
            { text: "Sondowanie liniowe.", isCorrect: false }
        ]
    },

    // --- GRAFY: NAJKRÓTSZE ŚCIEŻKI ---
    {
        id: 474,
        category: "Najkrótsze Ścieżki: Relaksacja",
        text: "Jaka jest rola operacji Relaksacji (Relax) krawędzi $(u,v)$?",
        options: [
            { text: "Sprawdza czy dystans do $v$ można skrócić przechodząc przez węzeł $u$; jeśli tak, aktualizuje $d[v] = d[u] + w(u,v)$ i ustawia przodka.", isCorrect: true },
            { text: "Zwiększa wagę wszystkich krawędzi o 1.", isCorrect: false },
            { text: "Zamienia węzeł w korzeń drzewa MST.", isCorrect: false },
            { text: "Usuwa krawędź z grafu residualnego.", isCorrect: false }
        ]
    },
    {
        id: 475,
        category: "Algorytm Dijkstry",
        text: "Złożoność algorytmu Dijkstry na zwykłym kopcu binarnym wynosi:",
        options: [
            { text: "$O((|V| + |E|) \\log |V|)$", isCorrect: true },
            { text: "$O(|V|^2)$", isCorrect: false },
            { text: "$O(|V| \\cdot |E|)$", isCorrect: false },
            { text: "$O(|E|)$", isCorrect: false }
        ]
    },
    {
        id: 476,
        category: "Algorytm Bellmana-Forda",
        text: "Dlaczego algorytm Bellmana-Forda potrafi wykryć ujemne cykle osiągalne ze źródła?",
        options: [
            { text: "Ponieważ po wykonaniu $|V|-1$ serii relaksacji wszystkich krawędzi wykonuje jeszcze jedną dodatkową weryfikację. Jeśli wartość jakiejkolwiek odległości wciąż można zmniejszyć, to musi istnieć ujemny cykl.", isCorrect: true },
            { text: "Ponieważ zlicza ujemne wagi i rzuca wyjątek gdy jest ich ponad 0.", isCorrect: false },
            { text: "Ponieważ zapisuje historię w stosie i szuka duplikatów węzłów w trybie rekurencyjnym.", isCorrect: false },
            { text: "Ponieważ używa metody zamiatania z geometrii by policzyć przecięcia.", isCorrect: false }
        ]
    },
    {
        id: 477,
        category: "Najkrótsze Ścieżki w DAG",
        text: "Jaki jest czas działania algorytmu wyznaczającego najkrótsze ścieżki z jednego źródła dla grafu DAG?",
        options: [
            { text: "Czas liniowy $\\Theta(|V| + |E|)$.", isCorrect: true },
            { text: "$O(|E| \\log |V|)$.", isCorrect: false },
            { text: "Czas kwadratowy $O(|V|^2)$.", isCorrect: false },
            { text: "Zależy to od faktu, czy graf ma wagi ujemne czy dodatnie.", isCorrect: false }
        ]
    },
    {
        id: 478,
        category: "Algorytm Floyda-Warshalla",
        text: "Jakie techniki algorytmiczne stosuje algorytm Floyda-Warshalla?",
        options: [
            { text: "Programowanie dynamiczne (Dynamic Programming).", isCorrect: true },
            { text: "Złożoność $\\Theta(|V|^3)$.", isCorrect: true },
            { text: "Algorytmy zachłanne (Greedy Algorithms).", isCorrect: false },
            { text: "Dziel i Zwyciężaj.", isCorrect: false }
        ]
    },

    // --- KOSZT ZAMORTYZOWANY ---
    {
        id: 479,
        category: "Analiza Kosztu Zamortyzowanego",
        text: "Na czym polega Metoda Księgowania (Accounting Method)?",
        options: [
            { text: "Przypisuje operacjom różne 'opłaty amortyzowane' (kredyty). Jeśli opłata jest wyższa niż koszt faktyczny, reszta kredytów jest odkładana na przyszłość by pokryć operacje bardzo kosztowne.", isCorrect: true },
            { text: "Wylicza całkowity koszt dla sekwencji $n$ operacji i dzieli ten koszt przez $n$.", isCorrect: false },
            { text: "Rozpisuje koszty w formie drzewa powiązanego z potencjałem.", isCorrect: false },
            { text: "W ogóle nie jest metodą związaną z zamortyzowanym kosztem.", isCorrect: false }
        ]
    },
    {
        id: 480,
        category: "Analiza Kosztu Zamortyzowanego",
        text: "Na czym polega Metoda Kosztu Sumarycznego (Aggregate Method)?",
        options: [
            { text: "Wyznacza absolutne ograniczenie górne $T(n)$ na ciąg $n$ operacji, a następnie określa koszt amortyzowany jako $T(n)/n$. Każda operacja z ciągu otrzymuje taki sam koszt.", isCorrect: true },
            { text: "Każdy rodzaj operacji w sekwencji otrzymuje własny indywidualny koszt oparty na wektorach funkcji.", isCorrect: false },
            { text: "Metoda ta przypisuje kredyty na zapas do struktury.", isCorrect: false },
            { text: "Wymaga funkcji $\\Phi(D)$ na każdym kroku stanu struktury.", isCorrect: false }
        ]
    },
    {
        id: 481,
        category: "Analiza Kosztu Zamortyzowanego",
        text: "Czym jest metoda potencjału w analizie zamortyzowanej?",
        options: [
            { text: "Przypisuje całej strukturze danych stan zwany 'potencjałem' $\\Phi$, reprezentujący zakumulowany zapas czasu, używany do pokrycia ewentualnych opłat w przyszłości.", isCorrect: true },
            { text: "Jest to matematyczna fizyka przepływów grafu z ujemnym prądem.", isCorrect: false },
            { text: "To inaczej metoda księgowania gdzie płacimy 2 monety zamiast 1.", isCorrect: false },
            { text: "Mierzy napięcie obciążeniowe RAM procesora dla systemu PRAM.", isCorrect: false }
        ]
    },

    // --- SIECI PRZEPŁYWOWE ---
    {
        id: 482,
        category: "Sieci Przepływowe",
        text: "Jakie ograniczenie (poza przepustowością $f(u,v) \\le c(u,v)$) musi spełniać prawidłowy przepływ w każdym wierzchołku wewnętrznym (oprócz źródła $s$ i ujścia $t$)?",
        options: [
            { text: "Zasada zachowania przepływu (Flow conservation): suma przepływów wpływających do wierzchołka musi być równa sumie przepływów z niego wypływających.", isCorrect: true },
            { text: "Przepływ musi być dodatni we wszystkich krawędziach połączonych z $v$.", isCorrect: false },
            { text: "Liczba krawędzi wchodzących i wychodzących musi być parzysta.", isCorrect: false },
            { text: "Musi on sumować się do zera na całym grafie z wyłączeniem liści.", isCorrect: false }
        ]
    },
    {
        id: 483,
        category: "Algorytm Forda-Fulkersona",
        text: "Co to jest ścieżka powiększająca (Augmenting Path)?",
        options: [
            { text: "Jest to prosta ścieżka ze źródła $s$ do ujścia $t$ w grafie residualnym, wzdłuż której można zwiększyć przepływ.", isCorrect: true },
            { text: "Ścieżka w grafie DAG będąca najkrótszym dojściem do $t$.", isCorrect: false },
            { text: "Droga w drzewie MST o najmniejszym koszcie.", isCorrect: false },
            { text: "Cykl Eulera przechodzący przez $s$ i $t$.", isCorrect: false }
        ]
    },
    {
        id: 484,
        category: "Sieci Przepływowe",
        text: "Na czym polega Twierdzenie Max-Flow Min-Cut?",
        options: [
            { text: "Wartość maksymalnego przepływu w sieci jest dokładnie równa pojemności minimalnego przekroju (cięcia) oddzielającego $s$ i $t$.", isCorrect: true },
            { text: "Każda krawędź ujemna w przepływie tnie graf na połowy.", isCorrect: false },
            { text: "Maksymalny prąd z $s$ równa się minimalnej długości ścieżki w BFS.", isCorrect: false },
            { text: "Przepływy w sieci są uwarunkowane wielomianowym progiem minimalnym.", isCorrect: false }
        ]
    },
    {
        id: 485,
        category: "Algorytm Edmondsa-Karpa",
        text: "Co charakteryzuje algorytm Edmondsa-Karpa wyznaczający maksymalny przepływ?",
        options: [
            { text: "Jest to wariant Forda-Fulkersona, w którym ścieżki powiększające szukane są za pomocą BFS (najkrótsza droga pod kątem liczby krawędzi).", isCorrect: true },
            { text: "Działa w czasie $O(V \\cdot E^2)$.", isCorrect: true },
            { text: "Do znajdowania ścieżek wykorzystuje strukturę Union-Find.", isCorrect: false },
            { text: "Służy głównie do rozwiązywania problemu Komiwojażera.", isCorrect: false }
        ]
    },
    {
        id: 486,
        category: "Skojarzenia w Grafach",
        text: "Jakie twierdzenie powiązuje rozmiar maksymalnego skojarzenia w grafach dwudzielnych z innymi strukturami?",
        options: [
            { text: "Twierdzenie Königa: W grafie dwudzielnym rozmiar maksymalnego skojarzenia jest równy rozmiarowi minimalnego pokrycia wierzchołkowego.", isCorrect: true },
            { text: "Twierdzenie o Rekurencji Uniwersalnej Master Theorem.", isCorrect: false },
            { text: "Twierdzenie Bayesa dla ułamków przepływowych.", isCorrect: false },
            { text: "Lemat o bezpiecznej krawędzi Kruskala.", isCorrect: false }
        ]
    },

    // --- ALGORYTMY TEKSTOWE ---
    {
        id: 487,
        category: "Algorytmy Tekstowe: Wstęp",
        text: "W problemie wyszukiwania wzorca w tekście mamy wzorzec o długości $m$ i tekst o długości $n$. Czym jest przesunięcie okna (shift)?",
        options: [
            { text: "Wartością $s$ ($0 \\le s \\le n-m$), dla której wszystkie $m$ znaków wzorca pokrywa się ze znakami tekstu startując od pozycji $T[s]$.", isCorrect: true },
            { text: "Wielkością bitową o jaką program shifruje litery ASCI.", isCorrect: false },
            { text: "Rotacją drzewa BST w strukturze weryfikacji.", isCorrect: false },
            { text: "Ilością pomyłek na krawędzi wzorca.", isCorrect: false }
        ]
    },
    {
        id: 488,
        category: "Algorytmy Tekstowe: Rabin-Karp",
        text: "Jakie główne zagrożenie optymalizacyjne kryje się w metodzie Rabina-Karpa pomimo stałego $O(1)$ czasu aktualizacji hasza?",
        options: [
            { text: "Zjawisko występowania fałszywych trafień (spurious hits) wymuszające sprawdzanie znak po znaku za każdym razem gdy hasze się pokrywają, generujące pesymistyczny czas $O((n-m+1)m)$.", isCorrect: true },
            { text: "Zjawisko 'pierwotnego grupowania' na listach powiązanych.", isCorrect: false },
            { text: "Błąd przepełnienia kolejki PRAM przy małym module.", isCorrect: false },
            { text: "Nie wylicza nigdy poprawnie wzorca od końca tekstu.", isCorrect: false }
        ]
    },
    {
        id: 489,
        category: "Algorytmy Tekstowe: KMP",
        text: "Złożoność czasowa wyszukiwania samego wzorca w tekście przez KMP (bez czasu tworzenia tablicy pi) to:",
        options: [
            { text: "$\\Theta(n)$", isCorrect: true },
            { text: "$\\Theta(n+m)$", isCorrect: false },
            { text: "$\\Theta(n \\log m)$", isCorrect: false },
            { text: "$\\Theta(m)$", isCorrect: false }
        ]
    },
    {
        id: 490,
        category: "Algorytmy Tekstowe: Boyera-Moore",
        text: "W jakich typach problemów z tekstem algorytm Boyera-Moore'a sprawdza się najlepiej, dając czas bliski $O(n/m)$?",
        options: [
            { text: "Kiedy alfabet (np. ASCII) jest duży w stosunku do wielkości tekstu, co zmniejsza częstość zgodności liter w Tekście i Wzorcu uruchamiając potężne skoki Heurystyki Złego Znaku.", isCorrect: true },
            { text: "Kiedy tekst jest binarny (zawiera tylko litery 0 i 1).", isCorrect: false },
            { text: "Kiedy wzorzec występuje w tekście tysiące razy.", isCorrect: false },
            { text: "Gdy wektor tekstu ma długość mniejszą od wzorca.", isCorrect: false }
        ]
    },

    // --- KOMPRESJA I ENTROPIA ---
    {
        id: 491,
        category: "Teoria Informacji",
        text: "Jakie zastosowanie i własności ma miara Entropii opisana przez Shannona na wykładach z kompresji?",
        options: [
            { text: "Opisuje nieuporządkowanie (ilość informacji) dla zestawu z prawdopodobieństwami, dając dolny teoretyczny limit ilości bitów na zakodowanie danych.", isCorrect: true },
            { text: "Opiera się na logarytmach na bazie dwójkowej ze wskaźnika częstości dla $p_i$.", isCorrect: true },
            { text: "Obliczana jest poprzez mnożenie w wektorze macierzowym odległości bitowych.", isCorrect: false },
            { text: "Znajduje się tylko w kompresji LZW z kodowaniem zjawisk słownikowych.", isCorrect: false }
        ]
    },
    {
        id: 492,
        category: "Kodowanie Huffmana",
        text: "Ile dzieci posiada nowo stworzony węzeł wewnętrzny (internal node) $z$, który podczas działania pętli algorytmu zostaje wyciągnięty jako połączenie $x$ i $y$ z kolejki?",
        options: [
            { text: "Zawsze dwoje dzieci (jest pełnym ojcem dla połączonych gałęzi $x$ i $y$).", isCorrect: true },
            { text: "Jedno dziecko w celu utworzenia zbalansowanej listy.", isCorrect: false },
            { text: "Zero dzieci, ponieważ wstawiany jest na liść grafu w drzewie kompresji.", isCorrect: false },
            { text: "Zależy to od wagi algorytmu LZW przypisanego dla klucza kodu.", isCorrect: false }
        ]
    },
    {
        id: 493,
        category: "Kompresja",
        text: "Czym charakteryzuje się algorytm kompresji LZW (Lempel-Ziv-Welch) w porównaniu do Huffmana?",
        options: [
            { text: "LZW operuje w formie algorytmu słownikowego, budując tabelę częstości \"w locie\" bez potrzeby znajomości całego pliku z wyprzedzeniem.", isCorrect: true },
            { text: "Wymaga dwukrotnego przeczytania tekstu w przeciwieństwie do Huffmana.", isCorrect: false },
            { text: "Produkuje stałe i prefiksowe mapowania binarne przez Priority Queue.", isCorrect: false },
            { text: "Działa dobrze tylko dla tablic zawierających cyfry arabskie.", isCorrect: false }
        ]
    },

    // --- ALGORYTMY RÓWNOLEGŁE I GEOMETRIA ---
    {
        id: 494,
        category: "Architektury Równoległe",
        text: "Czym jest maszyna (architektura) klasy SISD według Taksonomii Flynna?",
        options: [
            { text: "Single Instruction, Single Data - reprezentuje np. klasyczny, historyczny procesor jedno-rdzeniowy, który przetwarza jeden wątek instrukcji operujący na jednym wektorze danych (architektura Von Neumanna).", isCorrect: true },
            { text: "Oznacza wektoryzację danych na procesorach graficznych (GPU).", isCorrect: false },
            { text: "Jest to układ z podziałem CRCW i współbieżną pamięcią RAM.", isCorrect: false },
            { text: "Maszyna asynchronicznie odczytująca pliki przez wiele kontrolerów.", isCorrect: false }
        ]
    },
    {
        id: 495,
        category: "Architektury Równoległe",
        text: "Z czym wiąże się model EREW w układach PRAM?",
        options: [
            { text: "Jest to model z pamięcią dzieloną (Shared Memory) nie tolerujący zjawisk współbieżnego odczytu i zapisu na ten sam adres w tym samym cyklu.", isCorrect: true },
            { text: "Z dozwolonym współbieżnym czytaniem, ale zablokowanym pisaniem.", isCorrect: false },
            { text: "Jest równoznaczny z algorytmem Huffmana z dopiętym buforem LIFO.", isCorrect: false },
            { text: "Z podziałem procesorów na 0 i 1 gdzie tylko 0 mogą wpisywać dane w RAM.", isCorrect: false }
        ]
    },
    {
        id: 496,
        category: "Algorytmy Geometryczne",
        text: "Co robi algorytm Grahama?",
        options: [
            { text: "Służy on do wyznaczania Otoczki Wypukłej (Convex Hull) z zestawu wejściowych punktów w ujęciu dwuwymiarowym.", isCorrect: true },
            { text: "Jest stosowany do wyszukiwania przecięć pomiędzy prostymi za pomocą Miotły.", isCorrect: false },
            { text: "Oblicza entropię układu z wykorzystaniem dróg eulera.", isCorrect: false },
            { text: "Sortuje on w czasie liniowym wektory na płaszczyźnie używając metody 'Dziel i Wepchnij'.", isCorrect: false }
        ]
    },
    {
        id: 497,
        category: "Algorytmy Geometryczne: Otoczki",
        text: "Co przechowuje stos w głównym działaniu dla wyznaczania Otoczki algorytmem Grahama?",
        options: [
            { text: "Trzyma on w sobie wierzchołki, które tworzą zarys budowanej otoczki dla już przeanalizowanych elementów, w razie zakrętu 'w prawo' element ze szczytu jest usuwany ze stosu (POP).", isCorrect: true },
            { text: "Trzyma współczynniki z modułu BFS w celu powiększenia krawędzi wektora.", isCorrect: false },
            { text: "Przechowuje kody prefiksowe dla punktów i ułatwia szybkie wstawianie na AVL.", isCorrect: false },
            { text: "Pobiera z wejścia ułamki punktów leżących obok Miotły na Y.", isCorrect: false }
        ]
    },
    {
        id: 498,
        category: "Algorytmy Geometryczne",
        text: "Z jakim typem złożoności (optymalnie) przebiega algorytm na znalezienie Najmniej Odległej Pary Punktów (Closest Pair) z wykorzystaniem metody 'Dziel i Zwyciężaj'?",
        options: [
            { text: "Złożoność to $O(n \\log n)$, pozyskana z podziału płaszczyzny i analizy na brzegach (w limitowanych pasach okna $2\\delta$).", isCorrect: true },
            { text: "Działa on zawsze i wyłącznie w ułamkowym czasie $\\Theta(\\log n)$.", isCorrect: false },
            { text: "Jest to zadanie obciążające procesor w stopniu pesymistycznie-minimalnym $O(n^3)$.", isCorrect: false },
            { text: "Wymusza złożoność $O(n)$ przez wykorzystanie sortowania Liniowego dla osi zmiennoprzecinkowych.", isCorrect: false }
        ]
    },

    // --- REKURENCJA I KOSZTY - DODATKOWE ---
    {
        id: 499,
        category: "Twierdzenie o Rekurencji Uniwersalnej",
        text: "Czy równanie $T(n) = 2T(n/2) + n \\log n$ rozwiązuje się standardowym wzorem Master Theorem (dla trzech podstawowych przypadków)?",
        options: [
            { text: "Nie, różnica pomiędzy $\\log_b a$ (tu: $\\log_2 2 = 1$) a funkcją $f(n) = n \\log n$ wynosi czynnik $\\log n$, więc problem nie wpisuje się w standardowy przypadek poliwielomianowego rozkładu różnic. (Wymaga zaawansowanych rozszerzeń tw. Master).", isCorrect: true },
            { text: "Tak, daje to rozwiązanie z logiką $\\Theta(n)$.", isCorrect: false },
            { text: "Tak, daje natychmiastowo wynik dla kopca Heapsort w $O(n^2)$.", isCorrect: false },
            { text: "Nie, równanie nie posiada liczby stałej z a w domyśle równej 0.", isCorrect: false }
        ]
    },
    {
        id: 500,
        category: "Analiza Zamortyzowana",
        text: "Jaki jest pesymistyczny (absolutny) koszt pojedynczego wywołania procedury MULTIPOP(S, k) wyciągającej maksymalnie k lub całą resztę elementów z normalnego stosu?",
        options: [
            { text: "Pesymistycznie jest on rzędu $O(n)$, gdzie $n$ to liczba aktualnych wkładów w Stos.", isCorrect: true },
            { text: "Zamortyzowany koszt rzędu $O(n)$, dający potęgę $O(n^2)$.", isCorrect: false },
            { text: "Czas z definicji jest mierzony w $\\Theta(1)$ bo używamy operatora list z tyłu.", isCorrect: false },
            { text: "To wywołanie wymusza zrzut błędów i ma barierę $\\log n$.", isCorrect: false }
        ]
    },

    // --- ALGORYTMY GRAFOWE I BST (DRUGA RUNDA) ---
    {
        id: 501,
        category: "Drzewa BST",
        text: "Ile czasu zajmuje przejście (odwiedzenie) w drzewie Binarnego Drzewa Poszukiwań zawierającym $n$ elementów z użyciem funkcji INORDER, żeby wypisać liczby z posortowaniem?",
        options: [
            { text: "Zajmie to $\\Theta(n)$ bo algorytm odwiedza w całości po jednym razie każdy obecny węzeł na drzewie wypisując klucz na wyjście.", isCorrect: true },
            { text: "Zajmie czas logarytmiczny ograniczony do $O(\\log n)$.", isCorrect: false },
            { text: "Dla niezbalansowanych patyków drzew BST zajmie pesymistycznie czas z ułamkiem rzędu $O(n^2)$.", isCorrect: false },
            { text: "Dla wypisywania na AVL zajmie czas bliski $\\Theta(1)$.", isCorrect: false }
        ]
    },
    {
        id: 502,
        category: "Kopce",
        text: "Gdzie we wbudowanym i uzupełnionym w 100% poprawnie kopcu Max-Heap znajdują się elementy, które stanowią zbiór liści (poziom najgłębszy u spodu)?",
        options: [
            { text: "Są to wartości ukryte pod indeksami tablicy idącymi od $\\lfloor n/2 \\rfloor + 1$ do końca elementu w wektorze przy indeksie $n$.", isCorrect: true },
            { text: "Zawsze na lewym krańcu lewej podgałęzi w $2i$.", isCorrect: false },
            { text: "Indeksy liści zaczynają się u spodu od ułamków pierwszych 1 aż do $\\lfloor n/2 \\rfloor$.", isCorrect: false },
            { text: "Na krańcu pod wartością zapisaną z `Length(A)-1`.", isCorrect: false }
        ]
    },
    {
        id: 503,
        category: "Tablice Haszujące",
        text: "Metoda Haszowania ze współczynnikiem załatwienia ułamków, tzw. Haszowanie przez Metodę Dzielenia (Division Method). Jaka funkcja determinuje położenie węzła z kluczem k pod wymiar $m$?",
        options: [
            { text: "$h(k) = k \\bmod m$", isCorrect: true },
            { text: "$h(k) = m \\bmod k$", isCorrect: false },
            { text: "$h(k) = \\lfloor m / k \\rfloor$", isCorrect: false },
            { text: "$h(k) = (k \\cdot m) \\bmod 1$", isCorrect: false }
        ]
    },
    {
        id: 504,
        category: "Sortowania",
        text: "Kiedy (przy jakich ułożeniach elementów w tabeli wejściowej) w klasycznym Sortowaniu Bąbelkowym można otrzymać najlepszy czas $O(n)$ (zakładając użycie flagi zatrzymującej po przejściu bez jakichkolwiek swapek)?",
        options: [
            { text: "Gdy zbiór podany i wdrożony do wektora startowego jest od zera i już na początku w 100% posortowany i poukładany.", isCorrect: true },
            { text: "Gdy wektor jest zrandomizowany wg schematu Gaussa.", isCorrect: false },
            { text: "Gdy elementy ułożone są malejąco z wykluczeniem 1 połowy.", isCorrect: false },
            { text: "Nigdy, to niemożliwe dla bąbelków z wejścia do ucięcia cyklu z $n^2$.", isCorrect: false }
        ]
    },
    {
        id: 505,
        category: "Grafy: Algorytm Bellmana-Forda",
        text: "W pseudo kodzie z prezentacji, co wywoływane jest i aktualizowane na mapie dla zmiennej powrotów w słowniku `parent[v]` przy przejściu pomyślnie kroku dla relaksacji?",
        options: [
            { text: "`parent[v] = u`, wierzchołek u z którego dobiegła relaksująca niższa ułamkowa wartość dopisuje się jako ojciec by odtworzyć potem najkrótszą drogę.", isCorrect: true },
            { text: "`parent[u] = v` co zamienia pętle drzewa DFS na tablicy od powrotów.", isCorrect: false },
            { text: "Tablica wstawia symbol $\\infty$ dla zapobiegnięcia użycia ujemnej pętli.", isCorrect: false },
            { text: "Ucinany jest wynik funkcji rekursywnie we wskaźnik i zamykany do BFS.", isCorrect: false }
        ]
    },
    {
        id: 506,
        category: "Sortowania",
        text: "Co oznacza, że algorytm sortowania 'Sortowanie Przez Wstawianie' jest sortowaniem algorytmicznym ADAPTACYJNYM?",
        options: [
            { text: "To oznacza że jego czas powielenia operacji zależny jest ściśle od obecnego przed włączeniem zaawansowania ułożenia elementów i skraca w wektorze z czasem dla tablic prawie zrobionych zdejmując cykle do $\\approx O(n)$.", isCorrect: true },
            { text: "Jego struktura opiera się o rzut algorytmu z uczeniem maszynowym.", isCorrect: false },
            { text: "Oznacza, że dynamicznie dodaje tablicę pomocniczą zmniejszając ją o limit $k$.", isCorrect: false },
            { text: "Sortowanie nie wykorzystuje nigdy tablic tylko kolejkę i sterty z min/max.", isCorrect: false }
        ]
    },
    {
        id: 507,
        category: "Drzewa RB",
        text: "Co narzuca i ustala na Drzewach Red-Black (Czerwono Czarnych) zasada powiązania węzłów z kolorem CZERWONYM?",
        options: [
            { text: "Węzły posiadające oznaczenie jako Czerwone (Red) NIGDY w swym ciele nie mogą sąsiadować łącząc ułożenie w prostej z kolejnym czerwonym wierzchołkiem z rzędu jako potomek w rzutach.", isCorrect: true },
            { text: "Wszystkie z nich wymuszone do wejścia w NIL są zawsze trzymane i nadawane na start z kolorem czerwonym i wymuszane na dole ucięcia.", isCorrect: false },
            { text: "Kąt z wierzchołka Czerwonego może rosnąć na prawym boku dając w ostateczności Drzewa ujęte jako AVL dla zbilansowania.", isCorrect: false },
            { text: "Czerwone mogą mieć co najwyżej jednego syna jako zablokowanie do $n \\log n$.", isCorrect: false }
        ]
    },
    {
        id: 508,
        category: "Kopce i Kolejki Priorytetowe",
        text: "Jaki jest całkowity cel operacji podniesienia wartości wagowej (Increase-Key) w tablicowej kolejce opartej o wierzchołek u góry z Max?",
        options: [
            { text: "Jeśli nadana, nowa przypisana wartość klucza w ciele `A[i]` staje się dużo wyższa, funkcja wepchnie ten węzeł u góry pod miano Swap z jego ojcem tak daleko po gałęzi, dopóki znów ojciec go nie przewyższy bądź uderzy o pętle jako korzeń w 1.", isCorrect: true },
            { text: "Służy do przetasowania indeksów przez wyzerowanie $Length(A)$ z powrotem na liście w dół rzutu.", isCorrect: false },
            { text: "Usunięcie węzła w O(1) po wyciągnięciu max wektorem i odcięcie liści z dołu.", isCorrect: false },
            { text: "Spowoduje wyjęcie funkcji do Build-Heap robiącej od początku macierzy bąbelkowe poszukiwanie i swap.", isCorrect: false }
        ]
    },
    {
        id: 509,
        category: "Grafy: Cykl Ujemny",
        text: "Który algorytm znajdowania najkrótszych ścieżek z jednego korzenia w ostateczności po zdiagnozowaniu powrotu ujemnego cyklu wywoła pętlę i zwraca wartość zwrotną w bool 'FALSE' blokującą ujęcie nieosiągalnych wejść na wagach?",
        options: [
            { text: "Algorytm Bellmana-Forda.", isCorrect: true },
            { text: "Algorytm Dijkstry na ujemnym buforze.", isCorrect: false },
            { text: "Algorytm Kruskala.", isCorrect: false },
            { text: "Pętla DFS wyszukująca do zablokowania wag A*.", isCorrect: false }
        ]
    },
    {
        id: 510,
        category: "Grafy: Cykle i Sortowanie Topologiczne",
        text: "Co jeśli przy procedurze do Sortowania Topologicznego natrafimy w uderzeniu po strukturze DFS dla wyjść na krawędź sklasyfikowaną pod pojęcie powrotu (Back-edge)?",
        options: [
            { text: "Graf nie jest topologicznie przeliczalny. Znaleziono zapętlenie ucinające graf z modelu DAG (powstał Cykl), co wymusza asymilacyjny krach rzutu z odrzutem operacji na listę zakończeń.", isCorrect: true },
            { text: "Krawędź ta wrzuci do listy ułożonej wyjście ze szczytu na sam początek jako korzeń sortu u góry.", isCorrect: false },
            { text: "Odrzucamy wszystkie ścieżki i powroty ale wkładamy to samo za cyklem.", isCorrect: false },
            { text: "Nie wywołuje to błędu ale ułatwia wyciągnąć minimalny wektor wagi ujemnej dla DAGu bez zmian i cyklu.", isCorrect: false }
        ]
    },
    {
        id: 511,
        category: "Statystyki Pozycyjne: Węzły OS",
        text: "Czym skutkuje przyłączenie rzutu wektora dla rozmiaru i węzła we właściwości wbudowanej na pole 'size' na wejściu rotacji z Drzew OS z pozycyjnymi?",
        options: [
            { text: "Odpowiednią asymilacją pociągającą w rotacji zmianę tylko dla 2 wierzchołków biorących udział za wymianę w drzewach zachowując $\\Theta(1)$ pod zmiany `size`, bez pełnej aktualizacji drzew wyżej po każdym z rotowanych pod-drzew.", isCorrect: true },
            { text: "Węzły ulegają całkowitemu skreśleniu a wielkości sumowane pod korzeń zmieniają z rotacji z AVL wielkość całego bloku w tryb z wstawieniem dla $\\Theta(n)$.", isCorrect: false },
            { text: "Nie wykonuje na obrotach w statystykach OS zmian na polu `size`.", isCorrect: false },
            { text: "Gwarantuje zrzut z tablic do wektora listy jednokierunkowej dając szybszy OS-rank na powrocie w wektorze 0.", isCorrect: false }
        ]
    },
    {
        id: 512,
        category: "Haszowanie Otwarte: Adresy Kwadratowe",
        text: "Dlaczego sondowanie kwadratowe (Quadratic Probing) przy adresowaniu w ujęciach u tablic otwartych podpada jako zjawisko krytykowane?",
        options: [
            { text: "Jeśli i dla któregoś z elementów hash podstawowy wektora $h'(k)$ da identyczny index bazy, element ten wyprodukuje dla $h(k,i)$ po kolei tę samą falę błędów i konfliktów jak u wektora z wejścia u góry tworząc klastry ze wtórnymi grupowaniami (Secondary Clustering).", isCorrect: true },
            { text: "Wylicza ono dla zapętlenia pierwiastki zmiennoprzecinkowe ujęte w $\\infty$.", isCorrect: false },
            { text: "Pomija z założenia ułamki w potęgach dając ujemne odnośniki w adresie z list poza tablicę w C++.", isCorrect: false },
            { text: "Bazuje całkowicie z rzutem o wyłączone wektory we wzorze na listach liniowych w Chaining.", isCorrect: false }
        ]
    },
    {
        id: 513,
        category: "Grafy: Skojarzenia Dwudzielne w Grafach",
        text: "Jaka zasada panuje w przerobionej sieci na Przepływ przy węzłach u grafu dwudzielnego łącząc na Max Matching z problemem s do t?",
        options: [
            { text: "Każdy pojedynczy wierzchołek wektorowy ujęty ze zbiorów podłączony ma rzut na pojemność przepływu jako liczbową wartość $1$ dla unikania rozgałęzień od wektorów Super źródła z Super ujęciem i do wewnątrz $L$ u w $R$.", isCorrect: true },
            { text: "Dopuszczona pod krawędzie pojemność z ucięć i dróg wchodzi w wektor rzędu $\\infty$.", isCorrect: false },
            { text: "Do wyznaczeń wprowadzane są negatywy u dołu dając odwrócone -1.", isCorrect: false },
            { text: "Rozbija z modelu sieci by uzyskać z krawędzi wagę Bellmana na szukanie pod ścieżkach.", isCorrect: false }
        ]
    },
    {
        id: 514,
        category: "Algorytmy Tekstowe: Boyer-Moore na wprost",
        text: "Jak pętla wywołań w iteracji Boyera Moore odnosi z przeskokiem u Złych Znaków (Bad Character) na indeksie z tyłu okna tekstowego?",
        options: [
            { text: "Po złapaniu braku z tekstem pod okno z literą w T, algorytm wykorzysta wpis by sprawdzić ucieczkę wyrzucając tablicę od najdalszego prawostronnego by uciąg pokrył na oknie literę u tekstu na jej znaku przesuwając cały wymiar z m przed okno.", isCorrect: true },
            { text: "Obcina on za prefiksem z powrotu tablicę dopasowując okno po pierwszej lewej literze.", isCorrect: false },
            { text: "Oblicza wyznacznik wielomianu dla u ujętego na okno by skompensować przesunięcia $d^{m-1}$.", isCorrect: false },
            { text: "Sprawdza dla wzorców skróty z powrotami omija teksty do tyłu przy znaku dobrym bez ujęć na wektor.", isCorrect: false }
        ]
    },
    {
        id: 515,
        category: "Grafy: Algorytm Kruskala",
        text: "W pseudo kodzie z Kruskala używana tablica wyjść dla operacji `SORT(G.E)` co do zasady wymusza wektor dający ujęcie na węźle dla czasu działania:",
        options: [
            { text: "Podstawa i wiodąca potęga u asymptotyki za Kruskalem (z użyciem zbiorów) zdefiniowana leży ściśle właśnie od sortowania tej wejściowej bazy węzłów u wszystkich krawędzi $E$ z czasem z reguły ujmowanym w $O(E \\log E) \\cong O(E \\log V)$.", isCorrect: true },
            { text: "Asymptotyka zależy i dusi z Union(u,v) z czasem wektora u drzew kwadratowych do $\\Theta(n^2)$.", isCorrect: false },
            { text: "Jest to wektor O(1) do sortowań za sprawą algorytmów na pozycyjnej bazie bez ułamań.", isCorrect: false },
            { text: "Czasem wywodzi się dla podbazy grafu równego na ścieżce $O(V^3)$.", isCorrect: false }
        ]
    },
    {
        id: 516,
        category: "Struktury Danych: Przerwania dla Błędów w Tablicach",
        text: "Na tablicowych reprezentacjach do stosów ujęcie granicznego błędu Over-flow podczas procedury i rozkazu Push(S, x) dające zablokowanie rzutu występuje gdy:",
        options: [
            { text: "Gdy wkład do indeksu pod zmienną szczytu w `S.top` u wektora i odłożenie podniesie status równy rzutowi dla tablicy w pojemności ustalonej `S.size` dając wyjątek granicy z buforem.", isCorrect: true },
            { text: "Związany on i ustalony z under-flow pod $S.top == 0$ u krawędzi na wyciągnięcie błędu pustości.", isCorrect: false },
            { text: "Gdy wymuszenie tablic odczytuje miano wejść dla wskaźnika 1 po 0 w pętlach i wyrzuca rekurencję poza bazy PRAM.", isCorrect: false },
            { text: "Z uwagi dla włożenia wartości zmiennych ujemnych za wyjątek pustości pod i.", isCorrect: false }
        ]
    },
    {
        id: 517,
        category: "Grafy: A*",
        text: "Algorytm A* to w zamyśle przerobienie i rozbudowa Dijkstry z wzięciem i dorzuceniem na tablice priorytetów u dołu przy `f(v)` elementarnej funkcji. Co w A* określa litera h przy f=g+h?",
        options: [
            { text: "Litera h zdefiniowana u węzła w A* i grafie z kosztami do priorytetu jest rzutem, tzw. Funkcją Heurystyczną zgadującą szacowaną resztę z dystansu od wyciągniętego u węzła po ujęty punkt wyjściowy/celujący za u.", isCorrect: true },
            { text: "Zmienna $h$ to wysokość całego AVL w wyciągu drogi z wektorem od z.", isCorrect: false },
            { text: "Współczynnik z Hasha i reszty w bazie okna PRAM u węzłów dodanych po relaksacjach i BFS.", isCorrect: false },
            { text: "Ustala z definicji sumaryczną długość z drogi całej trasy dla minionych wezłów za $g$.", isCorrect: false }
        ]
    },
    {
        id: 518,
        category: "Teoria Równoległości",
        text: "Maszyna PRAM jako skrót do modelowania u algorytmów z grafiki obliczeniowej dająca dostęp za u wektory od asynchronicznej wejściowej ściany oznacza w języku:",
        options: [
            { text: "Skrót z Parallel Random Access Machine do ujęcia jako równoległy węzeł bazy i procesorów we współpracy z do ujęć po jednolitym pamiętaniu dla wszystkich z współdzielonym układem u szyny.", isCorrect: true },
            { text: "Processor Random Access Memory dający i ujęty w zrzucie jako układ do wektora jednopasmowego P.", isCorrect: false },
            { text: "Ujęcia do pamięci PRAM w trybach i grafach SISD dla wektorowych maszyn SIMD.", isCorrect: false },
            { text: "Zbudowany z algorytmów pamięciowych Parallel Run And Manage dający układy kompilatorowe z ujęciem 0.", isCorrect: false }
        ]
    },
    {
        id: 519,
        category: "Haszowanie Otwarte i Zamortyzowane",
        text: "Kiedy operacja z na wektory Adresowania na Listach Łańcuchowych i węzłach do ujęć zyskuje ułamkowe na haszowaniu wejściowym w $\\Theta(1)$?",
        options: [
            { text: "Tylko z wektorem i spełnionym założeniem u rzutu na S.U.H (Simple Uniform Hashing) w którym do kluczy pod tablicą na $m$ z haszy jest równo rozrzucona podstawa dająca średnio za listy w wiązaniach węzły z $n/m$.", isCorrect: true },
            { text: "Z założenia jest to tablica liniowa bez haszy.", isCorrect: false },
            { text: "Przy wykluczeniu operacji usunięcia z NIL i dopasowaniu w u do m z wbudowanym ujęciem wektora drzewa.", isCorrect: false },
            { text: "Nigdy w łańcuchach, średnio ucieka pod wymiary do $O(n \\log n)$.", isCorrect: false }
        ]
    },
    {
        id: 520,
        category: "Wyszukiwanie Zrandomizowane",
        text: "Rozwiązanie rzutu z problemem Randomized Partition w wektorach Selekcji za 1 użyciem na macierz od sortów u Quickselect daje oczekiwaną odpowiedź i rozwiązanie po ułamku na skali w:",
        options: [
            { text: "Po jednym odrzucie pod połówkę rzutu, oczekiwany dla wylosowanego pivota czas pod ugięciem i selekcji dla drzew spada by zablokować czas oczekiwany do równego wektorom $\\Theta(n)$ u schodzącego drzewa w pniu u lewej dla wektora $T(n)$.", isCorrect: true },
            { text: "Z czasem za powieleniem $O(n^2)$ w średnich warunkach u ugięć.", isCorrect: false },
            { text: "Rozdziela na $O(n \\log n)$ u rzutu i oczekiwanej na Hoare w podaniu wektorów i do selekcji pod i.", isCorrect: false },
            { text: "Sortuje on i wektor tablicowy za wyjściem na LSB Radixu.", isCorrect: false }
        ]
    },
    {
        id: 521,
        category: "Drzewo RB i Cormen",
        text: "Ujęcie i wysokość na najkrótszej z możliwych ścieżek od roota u wezłów Czerwono Czarnych we wpisie z dołu, pod liście u NIL-i, w stosunku z ujęciami najdłuższego rzutu daje zależności ujęte:",
        options: [
            { text: "Suma i najdłuższa ścieżka drogi pod z liści z roota do dołu jest co i ujęte wektorem Najwyżej z dwukrotnie tak długa u boku po najkrótszej z ścieżek dla czarnej wysokości (black-height) u wierzchołka.", isCorrect: true },
            { text: "Zawsze na ujęcie w proporcjach logarytmu dla AVL pod 1.44 u.", isCorrect: false },
            { text: "Jest równa sumie wszystkich ścieżek czarnych z odejściem lewych po drodze.", isCorrect: false },
            { text: "Musi stanowić równość bo wysokość jest rzutu ułamkowego $BF = 0$.", isCorrect: false }
        ]
    },
    {
        id: 522,
        category: "Grafy: BFS",
        text: "Wywołanie u algorytmu wejść i wektorów u BFS z kolejki dające w wierzchołkach `discovered` ustala status koloru węzła odwiedzonego podczas pętli dając od i w:",
        options: [
            { text: "Wrzucony podczas odwiedzin po osi z sąsiedztwa i wejścia na środek do Queue zmienia się na GRAY, by dociągnąć z u do odrzutu z wyjścia po wektorze na wprost i przemapowaniu wszystkich i zamienić do BLACK na `POP` z wyjściem.", isCorrect: true },
            { text: "Z rzutu dając wynik WHITE do RED ujętego na powrocie do węzłów u góry.", isCorrect: false },
            { text: "Po rzucie dla macierzy dającej błędy na ułamku pętli do BLUE i wejście na stos DFS u i.", isCorrect: false },
            { text: "Wcale nie zmienia do koloru, BFS wykorzystuje tablicę NIL u spodu w pętli bez zmian na flagę.", isCorrect: false }
        ]
    },
    {
        id: 523,
        category: "Minimalne Rozpinające: Prima a Dijkstry",
        text: "Czym u podstaw wyboru wagi minimalnej dla Kolejki Rzutu Priorytetowego z góry różni się węzeł `key` na wstawkach wewnątrz dla relaksacji i zmniejszeń u Prima względem rzutowania dla dróg u Dijkstry?",
        options: [
            { text: "Prim u ujęciu wektora zapamiętuje z Key zaledwie ujętą i najmniejszą dotychczas pojedynczą wagę z samego jednego kroku i połączenia do całego zebranego drzewa a w Dijkstra dba by z wejścia Key na pętli uwzględniał całościowy wektor (sumę) drogi u w kierunku s do n wierzchołka z dotychczasowego obchodu ze źródła.", isCorrect: true },
            { text: "Oba nie mają i ucinają się na różnicy u wektorów, obie z wag pętli mają relaks u Dijkstra na pojedyncze z $V-1$.", isCorrect: false },
            { text: "Dijkstra trzyma u key na wylocie czas z $f[u]$ DFS a u Prima czas wejścia z logarytmu.", isCorrect: false },
            { text: "W Primie relaks i wagi idą u $u$ i węzła na wektor pod rzut $O(V^3)$.", isCorrect: false }
        ]
    },
    {
        id: 524,
        category: "Geometryczne: Zamiatanie",
        text: "Zamiatanie z okna Sweep w lewej u linii przerywającej wektory sprawdza wyznaczając punkty w incydentach skrajnych z $O(n \\log n)$. Wykrywanie testu to ułożenie dla podrzędnych punktów sprawdzając co po włączeniu w wektory z miotły?",
        options: [
            { text: "Miotła i stan operacyjny na zdarzeniu po dodaniu odcinka od razu wykonuje z testowaniem ewentualne przecięcia pod podanym ze swoim aktualnym bezpośrednim sąsiadem górnym u Y na wektorach oraz z dolnym. Na usunięciu po X z testem powołuje sprawdzenie obydwu po sąsiedzku zwolnionych po rzucie węzłów (górnego z dolnym na złączeniu w linii).", isCorrect: true },
            { text: "Sprawdza dla osi OY połączone ścieżki i powroty z tablicą w DFS na cyklu.", isCorrect: false },
            { text: "Rozdziela na $O(n^2)$ i puszcza Naiwne przeszukiwanie dla całego pnia w lewej gałęzi okna.", isCorrect: false },
            { text: "Zamiatanie usuwa po punkcie i nie łączy i nie sprawdza z niczym zostawiając błędy ułamkowe po $\\delta$.", isCorrect: false }
        ]
    },
    {
        id: 525,
        category: "Kompilacja i Potęga Drzew: BST vs AVL vs RB",
        text: "Najszybsza gwarantowana odpowiedź i wyszukanie dla drzew ze wstawką dla n wejść wektorowych posortowanych z góry pod 1..n z tablicy z uciętymi wektorami uzyskamy przez:",
        options: [
            { text: "Budowę poprzez struktury Drzew Czerwono Czarnych albo po wstawkach z ujęcia pod Drzewa AVL w ucięciu z logarytmu dla wejścia bo omijają patologiczny z rzutów rzut pod listę zdegenerowaną w dół przy naiwnym BST.", isCorrect: true },
            { text: "Budując z Naiwnym drzewem BST i zbijając dla wektora $O(n)$.", isCorrect: false },
            { text: "Z ujęciem pnia u drzewa LZW od słownika wycinając ułamki równe zero w wektorze O(n).", isCorrect: false },
            { text: "Przestając z budowania i odrzucając tablice ułożone po stosie z użyciem Hashowania z $\\alpha = 100$.", isCorrect: false }
        ]
    },
    {
        id: 526,
        category: "Skróty Textowe",
        text: "Sposób by zbudować Prefix od tablic pi po przejściu z automatu to wejścia w pętli wywołujące i porównujące wartości u KMP na przedrostkach by:",
        options: [
            { text: "Odpowiednio w procedurze dla `P[k+1] != P[q]` zrzucać i redukować licznik dopasowania (k = pi[k]) po wektorach wstecz a po powrocie gdy złapią ze znakiem poprawność `P[k+1] == P[q]` nabić wielkość przedrostka pod $k = k + 1$ wpiętą we właściwą komórkę z tablicy do $\\pi[q]$.", isCorrect: true },
            { text: "Wrzucić wzorzec po pętli z uciętymi od zera cyframi dla wektorów w z wejściem do $O(m^2)$.", isCorrect: false },
            { text: "Skopiować węzły z Boyera Moore po dobrego znaku heurystyką na Złe Znaki u KMP z PRAM.", isCorrect: false },
            { text: "Obliczyć moduł z potęgowania po wektorze na $d^{m-1} \\bmod q$.", isCorrect: false }
        ]
    },
    {
        id: 527,
        category: "Algorytmy Obliczeń Równoległych: Prefix Sum",
        text: "Złożenie i użycie do ujęć wyliczania Prefiksów o sumie rzutów (Prefix Sum / Skan Prefixowy) z wejściem na 1 operacji i wyjść ze zbiorów rzutowanych na drzewa pozwala na PRAM obniżyć wektory do złożoności rzutu w:",
        options: [
            { text: "Redukcję rzutując w złożoności czasowej do ujęcia rzędu $\\Theta(\\log n)$ za wykorzystaniem n z dostępnych rdzeni / procesorów dających wkład dla symetrii pod rozpisane z góry i dołu Drzewo na dwóch fazach: up-sweep oraz down-sweep wektora.", isCorrect: true },
            { text: "Ograniczeniu o stałą z rzutem bez obrotów rzędu $O(1)$ przy sumarycznym ucięciu w SIMD.", isCorrect: false },
            { text: "Sprowadzeniu algorytmu po pętli u w wejściu pod $\\Theta(n^2)$ dla wykluczenia CRC z bazy PRAM.", isCorrect: false },
            { text: "Wylicza z ominięciem sum rzutu tylko po macierzy do $O(n^3)$ z wektorami po BFS i cyklach u góry.", isCorrect: false }
        ]
    },
    {
        id: 528,
        category: "Grafy: Reprezentacje",
        text: "Pamięć Macierzy dla wektorów z i incydentami $O(V^2)$ mimo swego wadliwego ułożenia i bycia niefaworyzowaną do rzadkich po wektorze sieci daje główną a zarazem uciętą ze stałą barierą zaletę przy:",
        options: [
            { text: "Wyłuskiwaniu statusu z bezpośrednią odpowiedzią i bez pętli na zapytanie o powiązanie - tzn. sprawdzenie istnienia u połączenia pomiędzy z wierzchołków $i$ oraz $j$ z użyciem u $A[i][j]$ i wyliczeniem na węźle w O(1) stałego czasu bez iterowania pętlą dla list rzadkich.", isCorrect: true },
            { text: "Jest wykorzystywana przy skojarzeniach i minimalnych przekrojach by pominąć użycia LIFO.", isCorrect: false },
            { text: "Daje pamięć w $\\Theta(1)$ po wciśnięciu u wierzchołków do wektora rzutu we wspólnych z O(V).", isCorrect: false },
            { text: "Rzuca u bazy zapytania logarytmiczne i obniża u ucięcia cykl na Floyd Warshall ze s do n-1.", isCorrect: false }
        ]
    },
    {
        id: 529,
        category: "Statystyki Pozycyjne: Rand Partition vs Magiczne",
        text: "Różnica w obciążeniu algorytmów z Randomized Quicksort od Magicznych Piątek a wyboru leży z bazy by na rzut wektora do pivota przy:",
        options: [
            { text: "Deterministycznym wyznaczeniu i przeliczeniu pod-zbiorów na piątki a z nich wyselekcjonowaniu wyjściowej bazy na Pivot = Mediana z Median co po matematycznej indukcji spina rozgałęzienie drzew u góry zawsze dla połówki większej od $3/10$, niszcząc u rzutu szanse pesymistyczną na $O(n^2)$ dla wyjść w Selekt.", isCorrect: true },
            { text: "Oparciu całego wyjścia u pivota na ślepym generatorze pseudolosowym wyrzucającym $\\infty$ dla wejścia u pętli.", isCorrect: false },
            { text: "Sortowaniu wejściowej tablicy przez Heapsort dla oszczędzenia wejścia u pivota.", isCorrect: false },
            { text: "Nigdy nie ma pewności, oba rzucają wektory do połówki bąbelkami i wymuszają pesymizm we wzorze na $n!$.", isCorrect: false }
        ]
    },
    {
        id: 530,
        category: "Kopce Fibonacciego i Dijkstra",
        text: "Użycie bardzo wymyślnego i ujętego od struktury rzutu kopca z wejścia za Fibonaccim pod algorytm z Dijkstry optymalizuje potężnie czas w gęstych grafach bo:",
        options: [
            { text: "Rozdziela czas trwania dla wierzchołków i potężnie operacji Decrease-Key pod amortyzowane do stałej ucięcie $\\Theta(1)$ wejściowe za obniżenie wagi. Powoduje i zrównuje to cały cykl do asymptoty dla wyjścia w czasie $\\Theta(V \\log V + E)$.", isCorrect: true },
            { text: "Odwraca z wejścia strukturę tablic w $O(n \\log n)$ o ujęcia z Dijkstry bez pętli z BFS na liściach.", isCorrect: false },
            { text: "Wykorzystuje on ciągi wektorowe Fibonacciego do pominięcia krawędzi ujemnych w Bellmanie-Fordzie na stałym z.", isCorrect: false },
            { text: "Niszczy cykle i poprawia Floyd Warshalla by działał w czasie liniowym $O(V)$ dla gęstych rzutów E w V kwadratów.", isCorrect: false }
        ]
    },
    {
        id: 531,
        category: "Grafy: Reprezentacja",
        text: "Dlaczego dla algorytmów takich jak BFS czy DFS, reprezentacja grafu za pomocą list sąsiedztwa jest przeważnie lepsza niż macierz sąsiedztwa?",
        options: [
            { text: "Ponieważ iterowanie po wszystkich sąsiadach danego wierzchołka zajmuje czas proporcjonalny do jego stopnia wyjściowego, co w skali całego grafu daje czas $O(V + E)$ zamiast $O(V^2)$.", isCorrect: true },
            { text: "Ponieważ listy sąsiedztwa pozwalają na sprawdzenie istnienia konkretnej krawędzi w czasie $O(1)$.", isCorrect: false },
            { text: "Ponieważ macierz sąsiedztwa nie może reprezentować grafów skierowanych.", isCorrect: false },
            { text: "Ponieważ listy sąsiedztwa nie wymagają dynamicznej alokacji pamięci.", isCorrect: false }
        ]
    },
    {
        id: 532,
        category: "Grafy: Sortowanie Topologiczne",
        text: "Dlaczego Sortowanie Topologiczne opiera się na algorytmie DFS, a nie BFS?",
        options: [
            { text: "Ponieważ czas zakończenia (finish time $f[u]$) w DFS idealnie odzwierciedla głębokość zależności; wierzchołek, z którego nie ma już żadnych nieodwiedzonych dróg, musi znaleźć się na końcu porządku.", isCorrect: true },
            { text: "Ponieważ BFS nie potrafi wykrywać cykli w grafach skierowanych.", isCorrect: false },
            { text: "Ponieważ BFS działa w czasie wykładniczym dla grafów DAG.", isCorrect: false },
            { text: "DFS pozwala na ujemne wagi, co jest wymagane w sortowaniu topologicznym.", isCorrect: false }
        ]
    },
    {
        id: 533,
        category: "Grafy: Najkrótsze Ścieżki",
        text: "W jaki sposób algorytm Dijkstry korzysta z własności optymalnej podstruktury?",
        options: [
            { text: "Opiera się na fakcie, że każdy podciąg najkrótszej ścieżki jest również najkrótszą ścieżką pomiędzy swoimi punktami końcowymi.", isCorrect: true },
            { text: "Wykorzystuje fakt, że najdłuższa ścieżka w grafie składa się z najdłuższych podścieżek.", isCorrect: false },
            { text: "Wymaga, aby każdy cykl w grafie miał sumę wag równą zero.", isCorrect: false },
            { text: "Dzieli graf na dwa rozłączne podgrafy i rozwiązuje je rekurencyjnie.", isCorrect: false }
        ]
    },
    {
        id: 534,
        category: "Grafy: Floyd-Warshall",
        text: "W jaki sposób algorytm Floyda-Warshalla sygnalizuje obecność cyklu o ujemnej wadze?",
        options: [
            { text: "Po zakończeniu działania algorytmu, przynajmniej jedna wartość na głównej przekątnej macierzy dystansów ($D[i][i]$) będzie ujemna.", isCorrect: true },
            { text: "Zwraca błąd dzielenia przez zero w trzeciej pętli zagnieżdżonej.", isCorrect: false },
            { text: "Pętla algorytmu nigdy się nie kończy, powodując przekroczenie limitu czasu (Timeout).", isCorrect: false },
            { text: "Wyrzuca wyjątek podczas pierwszej iteracji, gdy tylko napotka ujemną wagę krawędzi.", isCorrect: false }
        ]
    },
    {
        id: 535,
        category: "Grafy: Bellman-Ford",
        text: "Dlaczego główna pętla relaksacji w algorytmie Bellmana-Forda wykonuje się dokładnie $|V|-1$ razy?",
        options: [
            { text: "Ponieważ najkrótsza ścieżka prosta (nie zawierająca cykli) w grafie o $|V|$ wierzchołkach może składać się z maksymalnie $|V|-1$ krawędzi.", isCorrect: true },
            { text: "Ponieważ relaksacja $|V|$ krawędzi wymaga $|V|-1$ porównań.", isCorrect: false },
            { text: "Aby dopasować się do wymogów sortowania topologicznego w pętli wewnętrznej.", isCorrect: false },
            { text: "Jest to ograniczenie wynikające z wielkości pamięci podręcznej komputera.", isCorrect: false }
        ]
    },
    {
        id: 536,
        category: "Grafy: Kruskal",
        text: "Który z kroków w algorytmie Kruskala determinuje jego asymptotyczną złożoność czasową?",
        options: [
            { text: "Operacja sortowania wszystkich krawędzi na początku algorytmu, zajmująca $O(E \\log E)$ (co jest równe $O(E \\log V)$).", isCorrect: true },
            { text: "Operacja `Make-Set` wykonywana $|V|$ razy.", isCorrect: false },
            { text: "Operacja `Find-Set` z kompresją ścieżki.", isCorrect: false },
            { text: "Wypisywanie drzewa MST na standardowe wyjście.", isCorrect: false }
        ]
    },
    {
        id: 537,
        category: "Grafy: Algorytm Prima",
        text: "Jaka jest początkowa wartość kluczy (`key[v]`) przypisywana węzłom w kolejce priorytetowej w algorytmie Prima?",
        options: [
            { text: "Dla węzła startowego wynosi 0, a dla wszystkich pozostałych wierzchołków $\\infty$.", isCorrect: true },
            { text: "Wszystkie węzły otrzymują wartość 0.", isCorrect: false },
            { text: "Każdy węzeł otrzymuje wartość równą swojej liczbie sąsiadów (stopniowi).", isCorrect: false },
            { text: "Węzły otrzymują losowe wartości od 1 do $|V|$.", isCorrect: false }
        ]
    },
    {
        id: 538,
        category: "Zbiory Rozłączne (Union-Find)",
        text: "Na czym polega heurystyka łączenia według rangi (Union by rank) w strukturach zbiorów rozłącznych?",
        options: [
            { text: "Podczas operacji `Union`, korzeń mniejszego drzewa (o mniejszej randze) zawsze jest podpinany pod korzeń wyższego drzewa (o większej randze), co zapobiega degeneracji drzewa do listy.", isCorrect: true },
            { text: "Sortuje ona elementy przed dodaniem do zbioru.", isCorrect: false },
            { text: "Ustawia rangę każdego węzła na 1 po jego pierwszym użyciu.", isCorrect: false },
            { text: "Kasuje wskaźniki potomków podczas łączenia, uwalniając pamięć.", isCorrect: false }
        ]
    },
    {
        id: 539,
        category: "Zbiory Rozłączne (Union-Find)",
        text: "Na czym polega heurystyka kompresji ścieżki (Path compression) w strukturze zbiorów rozłącznych?",
        options: [
            { text: "Podczas operacji `Find-Set(x)`, wszystkie węzły na ścieżce od $x$ do korzenia są przepinane tak, aby wskazywały bezpośrednio na korzeń, przyspieszając przyszłe zapytania.", isCorrect: true },
            { text: "Usuwa węzły, które nie są już połączone z korzeniem.", isCorrect: false },
            { text: "Zmniejsza pamięć zajmowaną przez wskaźniki, wykorzystując wskaźniki XOR.", isCorrect: false },
            { text: "Zmienia strukturę drzewa na listę dwukierunkową.", isCorrect: false }
        ]
    },
    {
        id: 540,
        category: "Sieci Przepływowe: Ford-Fulkerson",
        text: "W jaki sposób wyznaczana jest wartość, o którą możemy powiększyć przepływ wzdłuż znalezionej ścieżki powiększającej $p$?",
        options: [
            { text: "Jest to minimum z przepustowości residualnych ($c_f$) wszystkich krawędzi wchodzących w skład tej ścieżki: $c_f(p) = \\min\\{c_f(u,v) : (u,v) \\in p\\}$.", isCorrect: true },
            { text: "Jest to suma przepustowości residualnych wszystkich krawędzi ścieżki.", isCorrect: false },
            { text: "Jest to średnia arytmetyczna przepustowości na ścieżce.", isCorrect: false },
            { text: "Jest to maksymalna wartość przepustowości początkowej krawędzi wychodzącej ze źródła $s$.", isCorrect: false }
        ]
    },
    {
        id: 541,
        category: "Sieci Przepływowe: Przekrój",
        text: "Zgodnie z Twierdzeniem o Maksymalnym Przepływie i Minimalnym Przekroju, kiedy algorytm Forda-Fulkersona kończy swoje działanie?",
        options: [
            { text: "Kiedy w sieci residualnej nie istnieje już żadna ścieżka powiększająca ze źródła $s$ do ujścia $t$.", isCorrect: true },
            { text: "Kiedy przepływ we wszystkich krawędziach osiągnie wartość ich pojemności ($f(u,v) = c(u,v)$).", isCorrect: false },
            { text: "Kiedy wyczerpie się limit iteracji wynoszący $|V| \\cdot |E|$.", isCorrect: false },
            { text: "Gdy w sieci residualnej pojawią się cykle o dodatniej pojemności.", isCorrect: false }
        ]
    },
    {
        id: 542,
        category: "Grafy Dwudzielne",
        text: "W jaki sposób sprowadzamy problem maksymalnego skojarzenia w grafie dwudzielnym do problemu maksymalnego przepływu?",
        options: [
            { text: "Dodajemy wierzchołek źródłowy $s$ i łączymy go krawędziami o pojemności 1 z każdym wierzchołkiem lewego podzbioru, oraz wierzchołek ujścia $t$ z krawędziami o pojemności 1 od każdego wierzchołka prawego podzbioru.", isCorrect: true },
            { text: "Ustawiamy przepustowość każdej krawędzi w grafie na $\\infty$.", isCorrect: false },
            { text: "Usuwamy wszystkie krawędzie powrotne za pomocą DFS.", isCorrect: false },
            { text: "Łączymy wszystkie wierzchołki w cykl Eulera i szukamy przepływu równego 1.", isCorrect: false }
        ]
    },
    {
        id: 543,
        category: "Algorytmy Tekstowe: Rabin-Karp",
        text: "W algorytmie Rabina-Karpa używana jest reguła Hornera. Jaki jest jej cel?",
        options: [
            { text: "Służy do szybkiego przeliczenia wartości liczbowej okna tekstu w czasie stałym $O(1)$ podczas przesuwania okna o jedną pozycję.", isCorrect: true },
            { text: "Gwarantuje, że nie wystąpią fałszywe trafienia (spurious hits).", isCorrect: false },
            { text: "Przesuwa wzorzec do tyłu, jeśli znaki się nie zgadzają.", isCorrect: false },
            { text: "Tworzy tablicę przejść dla automatu skończonego.", isCorrect: false }
        ]
    },
    {
        id: 544,
        category: "Algorytmy Tekstowe: KMP",
        text: "Podczas obliczania funkcji prefiksowej (tablicy $\\pi$) w algorytmie KMP, pętla `while` czasami wykonuje się wiele razy, redukując zmienną $k = \\pi[k]$. Dlaczego całkowity czas tej procedury to i tak $\\Theta(m)$?",
        options: [
            { text: "Na mocy analizy zamortyzowanej: wartość $k$ rośnie (inkrementuje) maksymalnie o $m$ w całej pętli głównej `for`. Ponieważ $k$ nie może być ujemne, łączna liczba dekrementacji w pętli `while` jest ograniczona przez $m$.", isCorrect: true },
            { text: "Ponieważ pętla `while` może wykonać się maksymalnie 1 raz w każdej iteracji pętli `for`.", isCorrect: false },
            { text: "Wynika to ze zredukowania problemu do wyszukiwania binarnego.", isCorrect: false },
            { text: "To fałsz, w pesymistycznym przypadku funkcja ta działa w czasie $O(m^2)$.", isCorrect: false }
        ]
    },
    {
        id: 545,
        category: "Algorytmy Tekstowe: Boyer-Moore",
        text: "W algorytmie Boyera-Moore'a, o ile pozycji należy przesunąć wzorzec po wykryciu niezgodności?",
        options: [
            { text: "Wybiera się większe z przesunięć obliczonych na podstawie heurystyki 'złego znaku' oraz heurystyki 'dobrego sufiksu'.", isCorrect: true },
            { text: "Zawsze przesuwa się wzorzec o stałą wartość równą $\\pi[j]$.", isCorrect: false },
            { text: "Zawsze przesuwa się wzorzec o dokładnie jedną pozycję w prawo.", isCorrect: false },
            { text: "Przesuwa się wzorzec o długość wzorca pomnożoną przez pozycję błędu.", isCorrect: false }
        ]
    },
    {
        id: 546,
        category: "Kodowanie Huffmana",
        text: "Ile razy w głównej pętli algorytmu Huffmana (dla alfabetu o $n$ symbolach) wykonywana jest operacja `Extract-Min` z kolejki priorytetowej?",
        options: [
            { text: "Dokładnie $2(n - 1)$ razy (ponieważ pętla wykonuje się $n-1$ razy, a w każdej iteracji ściągamy 2 elementy).", isCorrect: true },
            { text: "Dokładnie $n$ razy.", isCorrect: false },
            { text: "Dokładnie $\\log_2 n$ razy.", isCorrect: false },
            { text: "Zależy to od rozkładu prawdopodobieństw symboli.", isCorrect: false }
        ]
    },
    {
        id: 547,
        category: "Kompresja: LZW",
        text: "Na jakiej zasadzie dekompresor w algorytmie LZW odbudowuje słownik kodów, mimo że nie otrzymuje go w pliku z danymi?",
        options: [
            { text: "Dekompresor i kompresor używają tego samego deterministycznego algorytmu inicjowanego stałym alfabetem bazowym; dekompresor przewiduje i dopisuje do słownika nowe sekwencje w trakcie odczytywania kolejnych kodów.", isCorrect: true },
            { text: "Słownik musi zostać wcześniej wysłany niezależnym kanałem komunikacyjnym.", isCorrect: false },
            { text: "Kody ASCII w pliku są wystarczające do zbudowania drzewa Huffmana na nowo.", isCorrect: false },
            { text: "Wykorzystuje on zaszytą na końcu pliku specjalną sygnaturę słownikową z EOF.", isCorrect: false }
        ]
    },
    {
        id: 548,
        category: "Algorytmy Równoległe",
        text: "W modelu PRAM dla operacji prefiksowej (Prefix Sum) na tablicy o wielkości $n$, jaka jest minimalna głębokość drzewa wyliczeń (czas) przy wystarczającej liczbie procesorów?",
        options: [
            { text: "$O(\\log n)$", isCorrect: true },
            { text: "$O(1)$", isCorrect: false },
            { text: "$O(n)$", isCorrect: false },
            { text: "$O(n \\log n)$", isCorrect: false }
        ]
    },
    {
        id: 549,
        category: "Geometria Obliczeniowa: Iloczyn Wektorowy",
        text: "Mając trzy punkty $p_1, p_2, p_3$, jeśli iloczyn wektorowy wektorów $\\vec{p_1 p_2}$ i $\\vec{p_1 p_3}$ wynosi dokładnie zero, to oznacza to, że:",
        options: [
            { text: "Wszystkie trzy punkty są współliniowe (leżą na jednej prostej).", isCorrect: true },
            { text: "Wektory te tworzą kąt prosty (90 stopni).", isCorrect: false },
            { text: "Punkty te tworzą skrajnie lewy zakręt.", isCorrect: false },
            { text: "Punkt $p_3$ na pewno jest środkiem ciężkości (centroidem) odcinka.", isCorrect: false }
        ]
    },
    {
        id: 550,
        category: "Geometria Obliczeniowa: Algorytm Grahama",
        text: "Po znalezieniu najniżej położonego punktu $P_0$, algorytm Grahama sortuje pozostałe punkty. Jakie jest kryterium tego sortowania?",
        options: [
            { text: "Sortuje je rosnąco według kąta biegunowego (polar angle), jaki tworzą z punktem $P_0$ względem poziomej osi OX.", isCorrect: true },
            { text: "Sortuje je rosnąco według ich odległości Euklidesowej od $P_0$.", isCorrect: false },
            { text: "Sortuje je malejąco po współrzędnej Y.", isCorrect: false },
            { text: "Sortuje je wyłącznie według wyznacznika krzyżowego z pętli.", isCorrect: false }
        ]
    },
    {
        id: 551,
        category: "Geometria Obliczeniowa: Zamiatanie (Sweep Line)",
        text: "Czym jest 'kolejka zdarzeń' (event queue) w algorytmie poszukiwania przecięć odcinków na płaszczyźnie?",
        options: [
            { text: "Jest to kolejka priorytetowa przechowująca współrzędne X punktów końcowych wszystkich odcinków. Sortuje zdarzenia (moment przesunięcia miotły) od lewej do prawej.", isCorrect: true },
            { text: "Jest to drzewo czerwono-czarne utrzymujące odcinki posortowane według ich bieżącej współrzędnej Y.", isCorrect: false },
            { text: "Struktura LIFO przetrzymująca ignorowane punkty brzegowe.", isCorrect: false },
            { text: "Tablica przechowująca informacje o przecinających się figurach 3D.", isCorrect: false }
        ]
    },
    {
        id: 552,
        category: "Geometria Obliczeniowa: Najbliższa Para Punktów",
        text: "W algorytmie Dziel i Zwyciężaj szukającym najbliższej pary punktów, po znalezieniu minimalnego dystansu $\\delta$ w lewej i prawej połówce, w pasie granicznym o szerokości $2\\delta$ punkty trzeba sprawdzić tylko ze stałą liczbą innych punktów. Jaką?",
        options: [
            { text: "Maksymalnie 7 (bądź 8 w niektórych analizach) punktów dla danego punktu.", isCorrect: true },
            { text: "Wszystkimi pozostałymi $n-1$ punktami.", isCorrect: false },
            { text: "Tylko z jednym najbliższym sąsiadem z drzewa BST.", isCorrect: false },
            { text: "Ograniczenie to wynosi dokładnie $\\log n$ punktów.", isCorrect: false }
        ]
    },
    {
        id: 553,
        category: "Master Theorem: Przypadek 1",
        text: "Jeżeli mamy równanie rekurencyjne $T(n) = 8T(n/2) + n$, to złożoność asymptotyczna wynosi:",
        options: [
            { text: "$\\Theta(n^3)$, ponieważ $\\log_2 8 = 3$, a $n^3$ asymptotycznie dominuje wielomianowo nad funkcją $f(n) = n$ (Przypadek 1).", isCorrect: true },
            { text: "$\\Theta(n \\log n)$, z racji dominacji funkcji zewnętrznej.", isCorrect: false },
            { text: "$\\Theta(n^2)$, ponieważ $8/2 = 4$, co po spierwiastkowaniu daje 2.", isCorrect: false },
            { text: "$\\Theta(n^3 \\log n)$ z zasady 3 przypadku.", isCorrect: false }
        ]
    },
    {
        id: 554,
        category: "Master Theorem: Przypadek 3",
        text: "W przypadku 3 Twierdzenia o Rekurencji Uniwersalnej (gdy $f(n)$ dominuje rosnąc znacznie szybciej niż $n^{\\log_b a}$), musi zostać spełniony tzw. warunek regularności. Jak on brzmi?",
        options: [
            { text: "Muszą istnieć stała $c < 1$ oraz wystarczająco duże $n$, takie że $a \\cdot f(n/b) \\le c \\cdot f(n)$.", isCorrect: true },
            { text: "$a \\cdot f(n/b) \\ge c \\cdot f(n)$ dla dowolnego $c > 1$.", isCorrect: false },
            { text: "Funkcja $f(n)$ musi być bezwzględnie stała ($O(1)$).", isCorrect: false },
            { text: "Współczynnik dzielenia rekurencji musi wynosić $b=2$.", isCorrect: false }
        ]
    },
    {
        id: 555,
        category: "Analiza Zamortyzowana: Metoda Potencjału",
        text: "Jeżeli po wykonaniu pewnej operacji $i$ różnica potencjału $\\Phi(D_i) - \\Phi(D_{i-1})$ jest dodatnia, co to oznacza dla tej operacji?",
        options: [
            { text: "Zamortyzowany koszt tej operacji przypisany w analizie jest większy niż jej koszt rzeczywisty; operacja ta nakłada \"podatek\", odkładając nadmiar kredytów w systemie na poczet przyszłych, drogich działań.", isCorrect: true },
            { text: "Zamortyzowany koszt jest niższy od rzeczywistego, więc algorytm konsumuje odłożone zyski.", isCorrect: false },
            { text: "Oznacza to, że system za chwilę się zatrzyma z racji awarii Heapify.", isCorrect: false },
            { text: "Algorytm wykonał pesymistyczną pracę $\\Theta(n^2)$.", isCorrect: false }
        ]
    },
    {
        id: 556,
        category: "Struktury Danych: Tablice Dynamiczne",
        text: "Przy zmniejszaniu (zwalnianiu) rozmiaru tablicy dynamicznej, by uniknąć zjawiska 'trzepotania' (thrashingu - natychmiastowych ponownych alokacji po przeplocie Push/Pop), przy jakim współczynniku zapełnienia tablica jest zazwyczaj zmniejszana o połowę?",
        options: [
            { text: "Przy współczynniku wypełnienia spadającym do $\\alpha = 1/4$ (zmniejszamy o połowę, co podnosi wypełnienie z powrotem do $1/2$).", isCorrect: true },
            { text: "Zaraz po tym, gdy wskaźnik wypełnienia spadnie do $1/2$.", isCorrect: false },
            { text: "Przy współczynniku wynoszącym dokładnie $0$.", isCorrect: false },
            { text: "Nigdy, tablice dynamiczne obsługują tylko pule pamięci rozszerzalnej.", isCorrect: false }
        ]
    },
    {
        id: 557,
        category: "Sortowanie: Quicksort Hoare",
        text: "Gdzie w tablicy po jednokrotnym wykonaniu procedury `Hoare-Partition(A, p, r)` znajduje się wybrany element osiowy (pivot), jeśli oryginalnie był on np. na pozycji `A[p]`?",
        options: [
            { text: "Może znajdować się w dowolnym miejscu tablicy, w tym poza zwróconym indeksem podziału $q$. Hoare nie gwarantuje ułożenia pivota na ostatecznej pozycji.", isCorrect: true },
            { text: "Dokładnie pod indeksem $q$, dzieląc tablicę idealnie na pół.", isCorrect: false },
            { text: "Na samym końcu podtablicy `A[r]`.", isCorrect: false },
            { text: "Zawsze pozostaje nietknięty na `A[p]`.", isCorrect: false }
        ]
    },
    {
        id: 558,
        category: "Sortowanie: Quicksort Lomuto",
        text: "W implementacji `Lomuto-Partition(A, p, r)`, pivot jest wybierany jako $x = A[r]$. Co gwarantuje pseudokod tuż po zakończeniu głównej pętli i przed instrukcją `return`?",
        options: [
            { text: "Wykonuje `swap(A[i+1], A[r])`, po czym pivot znajduje się dokładnie na pozycji $i+1$, która jest jego ostateczną poprawną pozycją w całkowicie posortowanej tablicy.", isCorrect: true },
            { text: "Wstawia element na pozycję $p$, po czym uruchamia Insertion Sort.", isCorrect: false },
            { text: "Podnosi ramy stosu rekurencji wywołując funkcję `Build-Heap` na podtablicy.", isCorrect: false },
            { text: "Wyrzuca wyjątek StackOverflow jeśli elementy są ułożone asymetrycznie.", isCorrect: false }
        ]
    },
    {
        id: 559,
        category: "Sortowanie: Merge Sort",
        text: "Dlaczego na końcu nowo alokowanych, lewych i prawych tablic pomocniczych w klasycznym pseudokodzie scalania `Merge(A, p, q, r)` z Cormena dodaje się wartość $\\infty$?",
        options: [
            { text: "Działają one jako strażnicy (sentinels), upraszczając kod. Dzięki temu nie trzeba ciągle sprawdzać, czy którakolwiek z tablic pomocniczych się wyczerpała wewnątrz głównej pętli scalającej.", isCorrect: true },
            { text: "Gwarantują stabilność algorytmu w miejscach brzegowych.", isCorrect: false },
            { text: "Ułatwiają wektorową kompresję potokową dla PRAM.", isCorrect: false },
            { text: "Zapobiegają negatywnemu przepływowi w cyklach for.", isCorrect: false }
        ]
    },
    {
        id: 560,
        category: "Sortowanie: Heap Sort",
        text: "Które z twierdzeń w pełni oddaje zaletę algorytmu Heapsort, wyróżniającą go na tle Merge Sorta i Quick Sorta w standardowych zastosowaniach ogólnych?",
        options: [
            { text: "Heapsort jest jedynym spośród nich algorytmem sortującym, który JEDNOCZEŚNIE gwarantuje czas najgorszy $O(n \\log n)$ (czego nie ma Quicksort) ORAZ sortuje w miejscu $O(1)$ dodatkowej pamięci (czego nie ma Merge Sort).", isCorrect: true },
            { text: "Jest jedynym stabilnym algorytmem z czasem $O(n \\log n)$.", isCorrect: false },
            { text: "Dzięki operacjom wektorowym pozwala posortować grafy skierowane (Topologicznie).", isCorrect: false },
            { text: "Działa w czasie oczekiwanym $O(n)$ przez analizę statystyk z medianami.", isCorrect: false }
        ]
    },
    {
        id: 561,
        category: "Kopce Binarne",
        text: "Mając indeks węzła $i = 13$ w kopcu binarnym indeksowanym od $1$, pod jakim indeksem znajduje się jego prawy brat?",
        options: [
            { text: "Węzeł ten nie ma prawego brata, ponieważ jest on lewym dzieckiem węzła $\\lfloor 13/2 \\rfloor = 6$. Jego ewentualny brat znajduje się pod indeksem $2 \\cdot 6 + 1 = 13$, a on sam pod $2 \\cdot 6 = 12$. A nie, węzeł 13 jest PRAWYM dzieckiem węzła 6, więc brat z lewej to 12.", isCorrect: true },
            { text: "Węzeł ten posiada prawego brata pod indeksem 14.", isCorrect: false },
            { text: "Rodzeństwem jest wierzchołek 26.", isCorrect: false },
            { text: "Kopce nie posiadają relacji braterskich.", isCorrect: false }
        ]
    },
    {
        id: 562,
        category: "Sortowanie Liniowe: Counting Sort",
        text: "Czym skutkuje brak pętli idącej 'od tyłu' tablicy `A` (`downto 1`) przy kopiowaniu wyników w Counting Sort i zastąpienie jej pętlą 'od przodu' (`to n`)?",
        options: [
            { text: "Algorytm nadal prawidłowo posortuje liczby co do wartości, ale straci właściwość stabilności (elementy z takimi samymi kluczami zostaną odwrócone względem pozycji oryginalnej).", isCorrect: true },
            { text: "Algorytm wyrzuci błąd indeksowania, przekraczając tablicę wejściową.", isCorrect: false },
            { text: "Algorytm wygeneruje posortowaną listę, ale posortowaną malejąco.", isCorrect: false },
            { text: "Złożoność zliczenia wpadnie w przypadek $O(n^2)$.", isCorrect: false }
        ]
    },
    {
        id: 563,
        category: "Sortowanie Liniowe: Radix Sort",
        text: "Ile przebiegów $d$ musi wykonać sortowanie połówkowe/liczbowe (Radix Sort), jeśli tablica o rozmiarze $n$ ma 32-bitowe zmienne (np. int), a my używamy algorytmu sortowania po bajtach (8 bitów)?",
        options: [
            { text: "Wymaga dokładnie 4 przebiegów, ponieważ $32/8 = 4$.", isCorrect: true },
            { text: "Wymaga 32 przebiegów.", isCorrect: false },
            { text: "Wymaga $\\log_2 32$ przebiegów.", isCorrect: false },
            { text: "Wymaga 256 przebiegów.", isCorrect: false }
        ]
    },
    {
        id: 564,
        category: "Sortowanie Liniowe: Bucket Sort",
        text: "W standardowej implementacji z Cormena, co reprezentują elementy tablicy $B[0 \\dots n-1]$ po zainicjalizowaniu i włożeniu wartości do odpowiednich sekcji?",
        options: [
            { text: "Reprezentują referencje (head) do list jednokierunkowych, trzymających rzutowane, podobne wartości, które później są sortowane za pomocą `Insertion Sort` w ramach każdej małej listy osobno.", isCorrect: true },
            { text: "Są to gotowe drzewa AVL optymalizujące przedziały zmiennoprzecinkowe.", isCorrect: false },
            { text: "Przechowują ostateczne wagi relaksacji z algorytmu Forda-Bellmana.", isCorrect: false },
            { text: "Pobierają element i alokują go jako wektor do szyfrowania PRAM.", isCorrect: false }
        ]
    },
    {
        id: 565,
        category: "Drzewa BST",
        text: "Aby odnaleźć Nastepnika (Successor) w drzewie BST dla elementu, który POSIADA prawe poddrzewo, musimy:",
        options: [
            { text: "Po wejściu w prawe poddrzewo natychmiastowo podążać jak najdalej potrafimy lewymi wskaźnikami, poszukując minimum tego poddrzewa.", isCorrect: true },
            { text: "Podążać prawymi wskaźnikami, aż znajdziemy liść.", isCorrect: false },
            { text: "Cofnąć się w kierunku korzenia przez wskaźniki rodziców `parent[x]` i odnaleźć zakręt.", isCorrect: false },
            { text: "Wykonać procedurę Extrac-Max.", isCorrect: false }
        ]
    },
    {
        id: 566,
        category: "Drzewa BST: Usuwanie",
        text: "Podczas operacji usuwania węzła $z$ z dwojgiem dzieci z drzewa BST, węzeł $y$ (zastępujący go) zostaje wybrany jako następnik. Co możemy zagwarantować o tym następniku?",
        options: [
            { text: "Z pewnością nie ma on lewego dziecka (gdyż inaczej nie byłby następnikiem będącym minimum w prawym poddrzewie). Można go usunąć korzystając z trywialnego przypadku dla elementu z 1 prawym synem lub brakiem dzieci.", isCorrect: true },
            { text: "Węzeł ten na pewno nie posiada w ogóle dzieci (zawsze jest prawym liściem).", isCorrect: false },
            { text: "Następnik jest ojcem prawego syna usuwanego elementu.", isCorrect: false },
            { text: "To wywołuje błąd, następnika wyznacza się z korzenia grafu w trybie pre-order.", isCorrect: false }
        ]
    },
    {
        id: 567,
        category: "Drzewa AVL: Złożone Rotacje",
        text: "Z jakich dokładnych manipulacji strukturą składa się podwójna rotacja Right-Left (RL) wywoływana, gdy prawe poddrzewo jest za wysokie, ale lewe dziecko prawego poddrzewa psuje zbalansowanie?",
        options: [
            { text: "Uznając zepsuty węzeł za $x$, jego prawo za $y$, a węzeł psujący za $w$: wywołujemy `Rotate-Right` na węźle $y$ (dając $w$ na miejsce $y$), a następnie `Rotate-Left` na węźle $x$ (dając $w$ w miejsce korzenia rotacji).", isCorrect: true },
            { text: "Najpierw obracamy na $x$ lewo, a potem w prawo na ojcu.", isCorrect: false },
            { text: "Rotacja to modyfikacja wskaźników ojca i liścia do NULL i nadpisanie $BF=0$.", isCorrect: false },
            { text: "To podwójne odwrócenie kopca w formę listy LIFO.", isCorrect: false }
        ]
    },
    {
        id: 568,
        category: "Drzewa AVL: Przeliczanie BF",
        text: "Jaki jest koszt czasowy wyliczenia wysokości węzła $height(v)$ dla węzła w drzewie AVL zaimplementowanym tak jak w poleconym kodzie, po dokonaniu rotacji?",
        options: [
            { text: "Czas uważa się za $O(1)$, ponieważ węzły w AVL muszą buforować swoją wysokość (zmienna `v.height`). Po rotacji aktualizujemy po prostu `v.height = max(height(v.left), height(v.right)) + 1` dla zaledwie 2 zrotowanych elementów.", isCorrect: true },
            { text: "Wymaga zejścia do samych liści, dając czas $O(\\log n)$ za każdym przeliczeniem po rotacji.", isCorrect: false },
            { text: "Odświeżenie jest możliwe wyłącznie przez ponowne skanowanie Pre-order dając barierę $O(n)$.", isCorrect: false },
            { text: "Czas to $\\infty$, ponieważ drzewo cyklicznie uczy się balansowania BFS.", isCorrect: false }
        ]
    },
    {
        id: 569,
        category: "Drzewa Czerwono-Czarne (RB)",
        text: "Z racji zasad w drzewie Red-Black, wysokość dowolnego poddrzewa (mierzona liczbą węzłów) wynosi maksymalnie $h \\le 2 \\log_2(n+1)$. Z jakiej dokładnej zasady z sylabusa to wynika?",
        options: [
            { text: "Ponieważ z każdego punktu ścieżka do wszystkich liści NIL musi mieć tyle samo CZARNYCH węzłów, a czerwone nie mogą stać obok siebie, stąd skrajnie najdłuższa ścieżka to ścieżka naprzemienna C-C-C-C, która jest maksymalnie $2 \\times$ dłuższa niż czarna wysokość.", isCorrect: true },
            { text: "Z uwagi na operacje Haszowania i ucięcia algorytmu Bella w potęgach.", isCorrect: false },
            { text: "Gdyż korzeń musi być CZERWONY i podwaja on zrzuty wektorowe.", isCorrect: false },
            { text: "Rotacje zmniejszają go do logarytmu na mocy praw Moore'a dla stringów.", isCorrect: false }
        ]
    },
    {
        id: 570,
        category: "Drzewa Czerwono-Czarne (RB)",
        text: "Gdy mamy węzeł czerwony w drzewie RB, to z definicji...",
        options: [
            { text: "Wszystkie jego bezpośrednie dzieci muszą być koloru czarnego (lub być czarnymi liśćmi NIL).", isCorrect: true },
            { text: "Musi on mieć co najmniej jedno czerwone dziecko dla zachowania wagi.", isCorrect: false },
            { text: "Ojciec tego czerwonego węzła także musiałby być czerwony.", isCorrect: false },
            { text: "Drzewo jest uszkodzone i wymaga rotacji w stronę zbalansowania $O(1)$.", isCorrect: false }
        ]
    },
    {
        id: 571,
        category: "Statystyki Pozycyjne: OS-Tree",
        text: "Z jakiej własności strukturalnej we wskaźnikach OS-Tree korzystamy, aby móc iteracyjnie (bez pełnego drzewa przejść) dodawać rozmiary poddrzew w trakcie wyszukiwania elementu i zwracać jego pozycję rangową $r$?",
        options: [
            { text: "Korzystamy z faktu, że ranga elementu $x$ względem całego drzewa to rozmiar jego lewego poddrzewa powiększony o rozmiary lewych poddrzew wszystkich przodków, do których $x$ jest w stosunku potomkiem prawym. A każdy taki węzeł dopina swój lewy bagaż ułożenia in-order.", isCorrect: true },
            { text: "Związane jest to tylko z ucinaniem BFS na tablicy priorytetów Hashowych.", isCorrect: false },
            { text: "Wynika to ze wstawiania czerwonych powrotów z Back edges pod DFS.", isCorrect: false },
            { text: "To nieprawda, OS-rank wymaga stałej pętli o długości pełnego $n$.", isCorrect: false }
        ]
    },
    {
        id: 572,
        category: "Drzewa Przedziałowe (Interval Trees)",
        text: "Mając szukany przedział $i = [15, 20]$ oraz korzeń, z którym jest porównywany $x = [25, 30]$ wraz z wyliczonym `x.left.max = 22`. Jak zachowa się zapytanie z `Interval-Search(T, i)`?",
        options: [
            { text: "Sprawdzi wpierw pole `x.left.max` $\\ge 15$ ($22 \\ge 15$). Ponieważ warunek zachodzi, zapyta i pobiegnie na pewno do LEWEGO poddrzewa pomimo błędu w korzeniu głównym.", isCorrect: true },
            { text: "Zakończy wynik i rzuci FALSE, bo 25 > 20 i odetnie od prawej wektor.", isCorrect: false },
            { text: "Wybierze prawe poddrzewo bo szukana jest wartość maksimum z wektora.", isCorrect: false },
            { text: "Podzieli się wielowątkowo i pobiegnie w obie gałęzie z PRAM.", isCorrect: false }
        ]
    },
    {
        id: 573,
        category: "Skip Lists",
        text: "Prawdopodobieństwo, z jakim nowo dołączany element awansuje na wyższy poziom (promocja głowy) w Listach Przeskakiwania określane jest często przez $p$. Jaki jest standardowy narzut pamięciowy wskaźników tej struktury?",
        options: [
            { text: "Oczekiwana wielkość każdego z węzłów to $1/(1-p)$. Ponieważ $p$ zazwyczaj równe jest $1/2$, daje to $\\approx 2$ wskaźniki na każdy element – cała nowa wielopoziomowa struktura zużywa ledwie $O(n)$ wskaźników i asymiluje obciążenie O(1) na ramkę.", isCorrect: true },
            { text: "Pamięć ta zawsze wynosi $O(n \\log n)$, ponieważ każdy element musi duplikować ścieżki.", isCorrect: false },
            { text: "Węzeł ten wymaga potężnego przeskoku i pożera $\\Theta(n^2)$ danych wskaźnikowych do podwojenia i podpięcia wejść.", isCorrect: false },
            { text: "Struktury nie mają zrandomizowania i posiadają stale zadeklarowane wejścia wektorów z Radixu z czasem $\\Omega(\\infty)$.", isCorrect: false }
        ]
    },
    {
        id: 574,
        category: "Tablice Haszujące",
        text: "Uniwersalne haszowanie (Universal Hashing) z wykładu AiSD określa i charakteryzuje problem ułożenia klastrów. Czym cechuje się ta definicja uniwersalności by wymusić średni koszt O(1) z szukaniem na kolizji?",
        options: [
            { text: "Prawdopodobieństwo, że z wylosowanej na start programu rodziny funkcji haszującej $\\mathcal{H}$, dwa absolutnie dowolnie i z góry wskazane klucze wyrzucą na tablicy kolizję (hasz taki sam) jest ograniczone matematycznie ściśle do wartości nie większej niż $1/m$. Odbiera to szansę na hakerskie i umyślne obalenie algorytmu złymi danymi w pesymizm $O(n)$.", isCorrect: true },
            { text: "Wskazuje to po prostu tablicę liniową dla Stringów szyfrowanych z ułamków AES.", isCorrect: false },
            { text: "Zrzuca podwójny wektor do sztywnego przydziału równego sumarycznemu $m^2$.", isCorrect: false },
            { text: "Funkcja gwarantuje absolutne w 100% ominięcie błędów dopasowań dla modułu $q$.", isCorrect: false }
        ]
    },
    {
        id: 575,
        category: "Haszowanie Otwarte: Adresowanie liniowe",
        text: "Czym objawia się Pierwotne Grupowanie (Primary Clustering) w tablicy mieszającej przy Adresowaniu Liniowym (Linear Probing)?",
        options: [
            { text: "Im większy urośnie blok i \"zlepka\" wektorów po sąsiedzku ułożonych zajętych tablic wejściowych w pamięci, tym większe jest procentowe ujęcie i szansa, że każdy kolejny absolutnie przypadkowy, różny hash wejściowy wskoczy w to skupisko i po wejściu na skan $\\Theta(i)$ doklei się do jego końca, niepotrzebnie jeszcze je rozbudowując dla następców.", isCorrect: true },
            { text: "Polega na grupowaniu i spłaszczaniu tablic z powrotem na listę rzutów FIFO.", isCorrect: false },
            { text: "Odwraca moduł od elementów $NIL$ i podmienia go ze współczynnikiem $\\alpha = 100$.", isCorrect: false },
            { text: "Pojawia się z adresów wektora Quadratic pod wyjęciu stałej z C1 u LZW.", isCorrect: false }
        ]
    },
    {
        id: 576,
        category: "Haszowanie Otwarte: Double Hashing",
        text: "Kiedy Double Hashing wymusi zapętlenie bez dojścia na wolny slot tablicy przy adresacji otwartej mimo tego, że pozostawały gdzieś w niej wolne przestrzenie wektorów?",
        options: [
            { text: "Jeśli zwracany wewnątrz funkcji hasz przesunięć dla wywołań ze stałej $h_2(k)$ i parametr $m$ (wielkość wielomianowej tabeli z modułem) NIE BĘDĄ posiadać skoku ujętego i zbudowanego na wartościach Względnie Pierwszych dla modułu i wielkości - algorytm wejdzie i ograniczy iteracje w ślepą pętlę dla $c$ iteracji zamiast obejść wszystkie $m$ wpisów.", isCorrect: true },
            { text: "Gdy wstawimy tam wskaźnik i złącze DELETED z ułamkowym wariantem wektorów.", isCorrect: false },
            { text: "Hashowanie ulega poparciu po krawędzi poprzecznej z BFS ignorując rzuty na zera z rzutu kwadratowego.", isCorrect: false },
            { text: "Funkcja rzuci False dla każdej ujemnej drogi MST u algorytmu Prima dla skoków na hashach.", isCorrect: false }
        ]
    },
    {
        id: 577,
        category: "Grafy: Przeszukiwanie w głąb (DFS)",
        text: "Z grafu Skierowanego, oznaczanego wektorem G(V, E) odłączono krawędzie klasyfikując je. Z lematu wiemy, że graf z defincji pozostanie bez-cykliczny (Acykliczny DAG) dopóty, dopóki:",
        options: [
            { text: "Skaner z procedur DFS przeszukujących go i ucinających barwy nie zrzutuje w swoim algorytmie Ani Jednej Krawędzi klasyfikującej się do odłamu Krawędzi Powrotnych (Back Edges).", isCorrect: true },
            { text: "Liczba krawędzi przód i poprzeczna równa się zawsze na stałe potędze drzew binarnego 2.", isCorrect: false },
            { text: "Kolejka FIFO zrzuca do grafu elementy w czasie nie większym niż ułamki i potęgi $\\Theta(\\log V)$.", isCorrect: false },
            { text: "Nie zawiera w całości żadnego z kolorów WHITE dla zrzutów graficznych.", isCorrect: false }
        ]
    },
    {
        id: 578,
        category: "Grafy: Własności Drzewa Najkrótszych Ścieżek",
        text: "U wektorów wyciągających strukturę z BFS z połączonych krawędzi Drzewowych z $s$ w nieważonym wejściowym bloku w V. Własność i ułożenie z tablic rzutuje do:",
        options: [
            { text: "Trasa wyciągnięta i podtrzymana na drzewie z wejścia od źródłowego pnia z DFS i w BFS do wybranego, każdego węzła v to absolutnie poprawna i optymalna z tras z najkrótszym przelicznikiem i ułamkiem pod same krawędzie pod drogi dróg z $s$ do $v$.", isCorrect: true },
            { text: "Drzewa generują najdłuższe możliwe ścieżki celem odrzucenia Bellmana u góry ucięcia cyklowego z minusami.", isCorrect: false },
            { text: "Zawsze generuje cykle dając niespójne wejścia dające $O(\\infty)$.", isCorrect: false },
            { text: "DFS sortuje u Dijkstry z wierzchołkami na wkład kopcowy z O(n).", isCorrect: false }
        ]
    },
    {
        id: 579,
        category: "Złożoność: Model Drzewa Decyzyjnego",
        text: "Przyjęto uściślając definicje, i ustalono bezwzględną z teorii informacji potęgę złożoności dolnej Sortowań na Porównaniach w rzutach rzędu Omega od nlogn. Baza liści dająca za podstawę drzewa by udowodnić model wymaga z silni:",
        options: [
            { text: "Liczba wejść z permutacjami $n!$, a drzewo binarne o takiej liczbie z liści musi zmuszać do wysokości conajmniej od $\\log(n!)$, co z wektorowego zaokrąglenia Stirlinga dusi barierę i zamyka wynik asymptoty przy dolnej krawędzi $\\Omega(n \\log n)$.", isCorrect: true },
            { text: "Suma z wysokości ucieka pod kwadrat z rzutu o czasie $O(n^2)$.", isCorrect: false },
            { text: "Porównanie działa w stałym bloku i omija wyjście z silni co powoduje, że radiks po potęgach ma czas krótszy $O(1)$.", isCorrect: false },
            { text: "Algorytm musi porównywać elementy uciekające z węzła w O(n) przez Heapsort na wektorach z z.", isCorrect: false }
        ]
    },
    {
        id: 580,
        category: "Najkrótsze Ścieżki: Optymalna Podstruktura",
        text: "Wymóg i ujęcie pod problemy grafowe z wejścia o jednym źródle - na czym w ogóle opiera się struktura w 'optymalnej podstrukturze' wywołana by ratować graf i Dijkstra od ucięcia pętli?",
        options: [
            { text: "Cząstkowe pod-ścieżki wydobyte i przecięte z ostatecznie optymalnej pod drogi najkrótszej między s i wybranym v, również ze swymi z rzutu własnymi skrajnościami pod węzłami u do k są również skrajnie i idealnie optymalnie w tym wektorze same u siebie najkrótszymi na wektor z u do k w grafie.", isCorrect: true },
            { text: "Relaksacja dopuszcza dodawanie krawędzi na drzewo powodując $O(E \\log V)$ z usunięcia na BFS i stos ucięcia z DFS w grafach na krawędź.", isCorrect: false },
            { text: "Pozwala odwracać kierunki drogi przez wymuszenie macierzy z Floyd Warshall od n u i k.", isCorrect: false },
            { text: "Pętla obiega za skrótami u wektorów powodując błędy z cyklami O(n) od dołu z wejściem do góry.", isCorrect: false }
        ]
    },
    {
        id: 581,
        category: "Wstęp do Algorytmiki",
        text: "Co w analizie algorytmów oznacza pojęcie 'złożoność pesymistyczna'?",
        options: [
            { text: "Określa najgorszy z możliwych scenariuszy działania algorytmu dla danych o rozmiarze $n$ (wymaga najwięcej czasu).", isCorrect: true },
            { text: "Jest to minimalny czas, jakiego algorytm potrzebuje do wykonania zadania.", isCorrect: false },
            { text: "Opisuje algorytmy, które zawsze kończą się błędem.", isCorrect: false },
            { text: "Określa średnią ilość pamięci zużywanej przez program.", isCorrect: false }
        ]
    },
    {
        id: 582,
        category: "Wstęp do Algorytmiki",
        text: "Co oznacza popularny skrót 'AiSD' używany w toku studiów informatycznych?",
        options: [
            { text: "Algorytmy i Struktury Danych.", isCorrect: true },
            { text: "Aplikacje i Systemy Dyskowe.", isCorrect: false },
            { text: "Asymptotyczna i Średnia Długość.", isCorrect: false },
            { text: "Analiza i Sumowanie Danych.", isCorrect: false }
        ]
    },
    {
        id: 583,
        category: "Złożoność Obliczeniowa",
        text: "Która z poniższych asymptotycznych złożoności czasowych jest NAJLEPSZA (rośnie najwolniej w miarę wzrostu rozmiaru wejścia)?",
        options: [
            { text: "$O(1)$ - złożoność stała.", isCorrect: true },
            { text: "$O(\\log n)$ - złożoność logarytmiczna.", isCorrect: false },
            { text: "$O(n)$ - złożoność liniowa.", isCorrect: false },
            { text: "$O(n^2)$ - złożoność kwadratowa.", isCorrect: false }
        ]
    },
    {
        id: 584,
        category: "Złożoność Obliczeniowa",
        text: "Która z poniższych asymptotycznych złożoności czasowych jest NAJGORSZA (rośnie najszybciej)?",
        options: [
            { text: "$O(n!)$ - złożoność silni.", isCorrect: true },
            { text: "$O(2^n)$ - złożoność wykładnicza.", isCorrect: false },
            { text: "$O(n^3)$ - złożoność sześcienna.", isCorrect: false },
            { text: "$O(n \\log n)$ - złożoność liniowo-logarytmiczna.", isCorrect: false }
        ]
    },
    {
        id: 585,
        category: "Złożoność Obliczeniowa",
        text: "Z czym wiąże się badanie 'złożoności pamięciowej' algorytmu?",
        options: [
            { text: "Z określaniem, ile dodatkowej pamięci RAM (np. w postaci nowych tablic, zmiennych czy buforów) wymaga algorytm do działania.", isCorrect: true },
            { text: "Z liczbą linii kodu źródłowego programu.", isCorrect: false },
            { text: "Z czasem wczytywania programu z dysku twardego.", isCorrect: false },
            { text: "Ze zużyciem procesora mierzonego w gigahercach.", isCorrect: false }
        ]
    },

    // --- PROSTE STRUKTURY LINIOWE ---
    {
        id: 586,
        category: "Proste Struktury Danych",
        text: "Jak brzmi pełne rozwinięcie skrótu LIFO, opisującego działanie Stosu (Stack)?",
        options: [
            { text: "Last In, First Out (Ostatni element dodany na stos jest pierwszym zdjętym ze stosu).", isCorrect: true },
            { text: "Linear Input, Fast Output.", isCorrect: false },
            { text: "Long Integer, Floating Object.", isCorrect: false },
            { text: "Left In, Forward Out.", isCorrect: false }
        ]
    },
    {
        id: 587,
        category: "Proste Struktury Danych",
        text: "Która z popularnych struktur danych opiera się na strategii FIFO (First In, First Out)?",
        options: [
            { text: "Kolejka (Queue).", isCorrect: true },
            { text: "Stos (Stack).", isCorrect: false },
            { text: "Kopiec Binarny (Heap).", isCorrect: false },
            { text: "Drzewo Czerwono-Czarne (RB-Tree).", isCorrect: false }
        ]
    },
    {
        id: 588,
        category: "Proste Struktury Danych: Tablica",
        text: "Jaka jest złożoność czasowa dostępu do $i$-tego elementu w standardowej, jednowymiarowej tablicy (jeśli znamy jej indeks)?",
        options: [
            { text: "$O(1)$", isCorrect: true },
            { text: "$O(n)$", isCorrect: false },
            { text: "$O(\\log n)$", isCorrect: false },
            { text: "$O(n^2)$", isCorrect: false }
        ]
    },
    {
        id: 589,
        category: "Proste Struktury Danych: Stos",
        text: "Jak w anglojęzycznej literaturze nazywają się dwie podstawowe operacje odkładania elementu na stos i zdejmowania go ze stosu?",
        options: [
            { text: "Push (odłożenie) oraz Pop (zdjęcie).", isCorrect: true },
            { text: "Insert (odłożenie) oraz Extract (zdjęcie).", isCorrect: false },
            { text: "Enqueue (odłożenie) oraz Dequeue (zdjęcie).", isCorrect: false },
            { text: "Add (odłożenie) oraz Remove (zdjęcie).", isCorrect: false }
        ]
    },
    {
        id: 590,
        category: "Proste Struktury Danych: Listy",
        text: "Z czego zazwyczaj składa się pojedynczy 'węzeł' (node) w jednokierunkowej liście wiązanej?",
        options: [
            { text: "Z przechowywanej w nim wartości (danych) oraz ze wskaźnika prowadzącego do następnego węzła na liście.", isCorrect: true },
            { text: "Z przechowywanej w nim wartości i indeksu tablicy wielowymiarowej.", isCorrect: false },
            { text: "Z samego wskaźnika, ponieważ dane są przechowywane w globalnym rejestrze procesora.", isCorrect: false },
            { text: "Ze wskaźnika do lewego i prawego dziecka.", isCorrect: false }
        ]
    },
    {
        id: 591,
        category: "Proste Struktury Danych: Listy",
        text: "Co różni listę dwukierunkową od listy jednokierunkowej?",
        options: [
            { text: "W liście dwukierunkowej każdy węzeł posiada nie tylko wskaźnik na element następny, ale również wskaźnik na element poprzedni.", isCorrect: true },
            { text: "Lista dwukierunkowa nie używa wskaźników, tylko dwóch oddzielnych tablic.", isCorrect: false },
            { text: "Listę dwukierunkową czyta się zawsze tylko od końca do początku.", isCorrect: false },
            { text: "W liście dwukierunkowej węzły trzymają po dwie różne zmienne.", isCorrect: false }
        ]
    },
    {
        id: 592,
        category: "Proste Struktury Danych",
        text: "Jak oznacza się zazwyczaj brak wskaźnika (np. koniec listy lub brak dziecka w drzewie) w pseudokodach i językach programowania?",
        options: [
            { text: "Specjalną wartością NULL lub NIL.", isCorrect: true },
            { text: "Wartością $-1$.", isCorrect: false },
            { text: "Wartością $\\infty$ (nieskończoność).", isCorrect: false },
            { text: "Znakiem zapytania '?'.", isCorrect: false }
        ]
    },

    // --- PODSTAWY DRZEW ---
    {
        id: 593,
        category: "Drzewa: Podstawy",
        text: "Jak nazywa się jedyny węzeł w drzewie, który nie posiada żadnego rodzica (znajduje się na samym szczycie struktury)?",
        options: [
            { text: "Korzeń (Root).", isCorrect: true },
            { text: "Liść (Leaf).", isCorrect: false },
            { text: "Następnik (Successor).", isCorrect: false },
            { text: "Węzeł Wewnętrzny (Internal Node).", isCorrect: false }
        ]
    },
    {
        id: 594,
        category: "Drzewa: Podstawy",
        text: "Jak zdefiniowany jest 'Liść' (Leaf) w terminologii drzew?",
        options: [
            { text: "Jest to węzeł na dnie struktury, który nie posiada już żadnych potomków (dzieci).", isCorrect: true },
            { text: "Jest to węzeł, który posiada tylko jednego sąsiada w grafie.", isCorrect: false },
            { text: "Jest to nazwa na lewe dziecko każdego korzenia.", isCorrect: false },
            { text: "Jest to dowolny węzeł zabarwiony na czarno.", isCorrect: false }
        ]
    },
    {
        id: 595,
        category: "Drzewa: Podstawy",
        text: "Dlaczego drzewo nazywane jest drzewem 'binarnym'?",
        options: [
            { text: "Ponieważ każdy z jego węzłów może mieć co najwyżej dwoje dzieci (najczęściej nazywanych lewym i prawym).", isCorrect: true },
            { text: "Ponieważ w węzłach można przechowywać tylko wartości binarne (0 i 1).", isCorrect: false },
            { text: "Ponieważ wysokość tego drzewa to zawsze potęga liczby 2.", isCorrect: false },
            { text: "Ponieważ wymaga do działania dokładnie dwóch procesorów PRAM.", isCorrect: false }
        ]
    },
    {
        id: 596,
        category: "Drzewa: BST",
        text: "Jaka jest kluczowa różnica między zwykłym Drzewem Binarnym a Binarnym Drzewem Poszukiwań (BST)?",
        options: [
            { text: "W BST klucze w węzłach ułożone są z konkretną zależnością: elementy mniejsze lądują w lewym poddrzewie, a większe w prawym.", isCorrect: true },
            { text: "Drzewo BST nigdy nie posiada liści.", isCorrect: false },
            { text: "BST używa operacji XOR, by wyznaczać ścieżki.", isCorrect: false },
            { text: "Zwykłe drzewo binarne sortuje dane liniowo, a BST w kwadracie.", isCorrect: false }
        ]
    },
    {
        id: 597,
        category: "Drzewa: Przechodzenie",
        text: "Wymień trzy najpopularniejsze metody przechodzenia (traversal) i wypisywania węzłów w drzewie binarnym.",
        options: [
            { text: "Pre-order, In-order, Post-order.", isCorrect: true },
            { text: "Push-order, Pop-order, Top-order.", isCorrect: false },
            { text: "Max-order, Min-order, Mid-order.", isCorrect: false },
            { text: "Left-shift, Right-shift, Down-shift.", isCorrect: false }
        ]
    },
    {
        id: 598,
        category: "Drzewa: Wysokość i Głębokość",
        text: "Czym jest 'wysokość' całego drzewa?",
        options: [
            { text: "Jest to długość najdłuższej drogi (liczba krawędzi) prowadzącej od korzenia w dół, aż do najgłębiej położonego liścia.", isCorrect: true },
            { text: "Jest to liczba wszystkich węzłów, z których składa się drzewo.", isCorrect: false },
            { text: "Jest to wartość liczbowa przechowywana w korzeniu.", isCorrect: false },
            { text: "Jest to suma wag na wszystkich węzłach.", isCorrect: false }
        ]
    },

    // --- PODSTAWY ALGORYTMÓW SORTUJĄCYCH ---
    {
        id: 599,
        category: "Proste Sortowania",
        text: "Na czym polega najprostsza koncepcja algorytmu Sortowania Bąbelkowego (Bubble Sort)?",
        options: [
            { text: "Na wielokrotnym przechodzeniu przez tablicę, porównywaniu sąsiadujących elementów i zamienianiu ich miejscami, jeśli nie są w poprawnej kolejności.", isCorrect: true },
            { text: "Na dzieleniu tablicy na mniejsze kawałki, aż pozostaną jednoelementowe bloki.", isCorrect: false },
            { text: "Na budowie wirtualnego drzewa poszukiwań ze skanowanej listy.", isCorrect: false },
            { text: "Na losowym przemieszaniu elementów (shuffle), dopóki tablica nie ułoży się losowo w posortowaną.", isCorrect: false }
        ]
    },
    {
        id: 600,
        category: "Proste Sortowania",
        text: "Co oznacza termin, że dany algorytm sortujący działa 'w miejscu' (in-place)?",
        options: [
            { text: "Oznacza to, że algorytm nie potrzebuje żadnych dużych dodatkowych tablic i używa tylko stałej niewielkiej ilości pamięci $O(1)$ do zamiany elementów.", isCorrect: true },
            { text: "Oznacza to, że sortowanie następuje błyskawicznie, bez przenoszenia danych do innej funkcji.", isCorrect: false },
            { text: "Oznacza to, że algorytm wymaga pamięci RAM w rozmiarze dokładnie takim samym jak dysk wejściowy.", isCorrect: false },
            { text: "To pojęcie fizyczne określające uwięzienie instrukcji CPU w jednej lokacji na dysku.", isCorrect: false }
        ]
    },
    {
        id: 601,
        category: "Proste Sortowania",
        text: "Które z podanych sortowań nazywamy 'stabilnym'?",
        options: [
            { text: "Sortowanie jest stabilne, gdy elementy o dokładnie takich samych wartościach zachowują swoją pierwotną kolejność względem siebie w posortowanej tablicy.", isCorrect: true },
            { text: "Stabilne sortowanie to takie, które działa poprawnie, nawet jak nagle braknie prądu w komputerze.", isCorrect: false },
            { text: "Stabilne sortowanie nigdy nie modyfikuje żadnych elementów.", isCorrect: false },
            { text: "Sortowanie stabilne ma zawsze pesymistyczny czas wykonania $O(1)$.", isCorrect: false }
        ]
    },
    {
        id: 602,
        category: "Algorytmy Sortowania: Dziel i Zwyciężaj",
        text: "Z jakich podstawowych 3 słów w teorii składa się zasada 'Dziel i Zwyciężaj' (Divide and Conquer)?",
        options: [
            { text: "Dziel (Divide), Zwyciężaj (Conquer), Połącz (Combine).", isCorrect: true },
            { text: "Dodaj (Add), Usuń (Delete), Zapisz (Save).", isCorrect: false },
            { text: "Kopiuj (Copy), Wytnij (Cut), Wklej (Paste).", isCorrect: false },
            { text: "Relaksuj (Relax), Szukaj (Search), Przeskocz (Skip).", isCorrect: false }
        ]
    },
    {
        id: 603,
        category: "Algorytmy Sortowania",
        text: "Co to jest 'Pivot' (element osiowy)?",
        options: [
            { text: "Jest to element wybierany w algorytmie Quicksort służący za punkt odniesienia do podzielenia tablicy na mniejsze i większe od niego połówki.", isCorrect: true },
            { text: "Jest to pierwszy znaleziony element z błędem zapisu w algorytmie naprawczym.", isCorrect: false },
            { text: "To określenie głównego korzenia w drzewach AVL.", isCorrect: false },
            { text: "Jest to suma punktów zdobytych podczas działania programu PRAM.", isCorrect: false }
        ]
    },
    {
        id: 604,
        category: "Algorytmy Wyszukiwania",
        text: "Podstawowy warunek brzegowy do działania Wyszukiwania Binarnego (Binary Search) to:",
        options: [
            { text: "Tablica w której szukamy, musi być uprzednio posortowana.", isCorrect: true },
            { text: "Tablica musi posiadać nieparzystą liczbę elementów.", isCorrect: false },
            { text: "Szukana liczba musi być parzysta.", isCorrect: false },
            { text: "Algorytm musi najpierw wymieszać tablicę używając randomizacji.", isCorrect: false }
        ]
    },
    {
        id: 605,
        category: "Algorytmy Wyszukiwania",
        text: "Jak długo w pesymistycznym przypadku szuka konkretnego elementu tzw. Wyszukiwanie Liniowe (Naiwne) w $n$-elementowej tablicy?",
        options: [
            { text: "Wykonuje do $O(n)$ kroków, ponieważ element może być na samym końcu lub może go w ogóle nie być.", isCorrect: true },
            { text: "Znajduje go w czasie $O(1)$, wyliczając współczynnik haszujący.", isCorrect: false },
            { text: "Szuka go z użyciem ucinania na wskaźnikach dając $O(\\log n)$.", isCorrect: false },
            { text: "Potrzebuje na to $\\Theta(n^2)$ sprawdzeń.", isCorrect: false }
        ]
    },

    // --- PODSTAWY GRAFÓW ---
    {
        id: 606,
        category: "Podstawy Grafów",
        text: "Z jakich zbiorów matematycznych zbudowany jest graf $G = (V, E)$?",
        options: [
            { text: "Ze zbioru wierzchołków (Vertices - $V$) i ze zbioru krawędzi (Edges - $E$).", isCorrect: true },
            { text: "Ze zbioru wektorów (Vectors) i elementów składowych (Elements).", isCorrect: false },
            { text: "Ze zmiennych (Variables) i operacji eulerowskich (Eulers).", isCorrect: false },
            { text: "Ze zbioru wskaźników (Visuals) i zbioru równań (Equations).", isCorrect: false }
        ]
    },
    {
        id: 607,
        category: "Podstawy Grafów",
        text: "Czym różni się Graf Skierowany od Grafu Nieskierowanego?",
        options: [
            { text: "W grafie skierowanym krawędzie mają określony kierunek (zwrot, np. przypominają strzałkę z punktu u do v), w nieskierowanym połączenie działa w obie strony.", isCorrect: true },
            { text: "Graf skierowany może posiadać tylko krawędzie bez wagi (kosztu).", isCorrect: false },
            { text: "Graf nieskierowany musi posiadać cykl Eulera, skierowany nie może.", isCorrect: false },
            { text: "W grafie nieskierowanym wierzchołki układają się w koło.", isCorrect: false }
        ]
    },
    {
        id: 608,
        category: "Podstawy Grafów",
        text: "Co określa termin 'Stopień Wierzchołka' (Degree) w grafie nieskierowanym?",
        options: [
            { text: "Liczbę krawędzi bezpośrednio przylegających do tego wierzchołka.", isCorrect: true },
            { text: "Największą wartość z wag dołączonych do wierzchołka.", isCorrect: false },
            { text: "Długość najdłuższej możliwej trasy przez niego przechodzącej.", isCorrect: false },
            { text: "Kolor jakim pomalował go algorytm DFS.", isCorrect: false }
        ]
    },
    {
        id: 609,
        category: "Podstawy Grafów",
        text: "Co oznacza termin 'Waga Krawędzi' w grafach ważonych?",
        options: [
            { text: "Jest to liczba (koszt, odległość, czas) przypisana do konkretnej krawędzi, mówiąca o trudności lub zasobie potrzebnym do przebycia tej krawędzi.", isCorrect: true },
            { text: "Jest to masa procesora generowana podczas liczenia pętli.", isCorrect: false },
            { text: "Określa stopień zagnieżdżenia struktury Kruskala.", isCorrect: false },
            { text: "Waga ta zawsze opisuje odległość wierzchołka od drzewa BFS.", isCorrect: false }
        ]
    },
    {
        id: 610,
        category: "Podstawy Grafów",
        text: "Co to jest 'Cykl' w grafie?",
        options: [
            { text: "Jest to ciąg sąsiadujących krawędzi, który tworzy zamkniętą ścieżkę – zaczyna się i kończy w dokładnie tym samym wierzchołku.", isCorrect: true },
            { text: "Jest to iteracja pętli p-for we wnętrzu algorytmu grafowego.", isCorrect: false },
            { text: "Rozdzielenie grafu na dwa równe komponenty.", isCorrect: false },
            { text: "Jedna z nazw dla korzenia drzewa rozpinającego.", isCorrect: false }
        ]
    },
    {
        id: 611,
        category: "Podstawy Grafów",
        text: "Graf określany mianem 'Grafu Spójnego' (Connected Graph) to taki, który:",
        options: [
            { text: "Posiada drogę (ścieżkę krawędziową) pomiędzy Każdą możliwą parą wierzchołków leżących na grafie (nie posiada oddzielonych, niepołączonych 'wysp').", isCorrect: true },
            { text: "Zbudowany jest w 100% z krawędzi drzewowych oznaczonych na czerwono.", isCorrect: false },
            { text: "Zawiera wszystkie możliwe relacje na macierzy osiągając stopień $V^2$.", isCorrect: false },
            { text: "Graf Spójny to inna nazwa dla Drzewa z ujemnymi cyklami.", isCorrect: false }
        ]
    },
    {
        id: 612,
        category: "Podstawy Grafów",
        text: "Który algorytm najprościej pozwala zbadać, czy do jakiegoś wierzchołka B da się w ogóle dotrzeć (jest osiągalny) ze startowego wierzchołka A?",
        options: [
            { text: "Przeszukiwanie Wszerz (BFS) lub Przeszukiwanie w Głąb (DFS) uruchomione z węzła A. Jeśli odkryją węzeł B, oznacza to drogę.", isCorrect: true },
            { text: "Algorytm Sortowania Radix działający na stringach.", isCorrect: false },
            { text: "Algorytm znajdywania otoczki wypukłej Grahama.", isCorrect: false },
            { text: "Procedura `Build-Heap` na węzłach wejściowych.", isCorrect: false }
        ]
    },

    // --- PODSTAWY HASZOWANIA I STRUKTUR ZŁOŻONYCH ---
    {
        id: 613,
        category: "Wstęp do Haszowania",
        text: "Czym charakteryzuje się 'Kolizja' w systemie Tablic Mieszających (Hash Tables)?",
        options: [
            { text: "Występuje gdy na dwa całkowicie różne wpisy (klucze), algorytm z funkcji matematycznej wyliczy im i przydzieli dokładnie to samo miejsce/indeks w małej tablicy wyników.", isCorrect: true },
            { text: "Występuje tylko po użyciu usunięcia $NIL$ bez użycia wskaźnika $DELETED$.", isCorrect: false },
            { text: "Oznacza, że program utracił stabilność podczas sortowania klastrów.", isCorrect: false },
            { text: "Zablokowanie dostępu wątku w modelu CRCW PRAM.", isCorrect: false }
        ]
    },
    {
        id: 614,
        category: "Wstęp do Haszowania",
        text: "Do czego służy i jaki ma podstawowy cel 'Funkcja Haszująca'?",
        options: [
            { text: "Jej zadaniem jest przyjęcie niemal dowolnego wejścia (np. tekstu lub dużej liczby) i szybkie, deterministyczne matematyczne przekształcenie go na konkretny, krótki indeks z przedziału tablicy wyjściowej.", isCorrect: true },
            { text: "Rozdziela ona program operacyjny z jednego wątku w tryb wielowątkowy maszyny.", isCorrect: false },
            { text: "Buduje ona strukturalnie pełne Drzewo Czerwono Czarne na wskaźnikach.", isCorrect: false },
            { text: "Ogranicza pętle bąbelkowe przy sortowaniu ułamków do zera.", isCorrect: false }
        ]
    },
    {
        id: 615,
        category: "Podstawy Kopców",
        text: "Kopiec to struktura, którą zazwyczaj ukazuje się w teorii jako narysowane wielkie drzewo binarne. Jaka inna bardzo powszechna i prosta konstrukcja odpowiada fizycznie za przechowywanie tego drzewa w pamięci w kodzie źródłowym?",
        options: [
            { text: "Zwykła płaska jednowymiarowa Tablica, do której elementy układane są bez luk, jeden za drugim, wg rzędu odczytu z poziomów.", isCorrect: true },
            { text: "Wyłącznie podwójnie wiązana lista skokowa (Skip List).", isCorrect: false },
            { text: "Słownik asocjacyjny generowany w formacie JSON.", isCorrect: false },
            { text: "Graf dwudzielny ze wskaźnikami wektorowymi.", isCorrect: false }
        ]
    },

    // --- REKURENCJA ---
    {
        id: 616,
        category: "Podstawy: Rekurencja",
        text: "W programowaniu i algorytmach 'Rekurencją' lub 'Rekursją' nazywa się zjawisko:",
        options: [
            { text: "Kiedy funkcja wywołuje we wnętrzu swego własnego ciała samą siebie z często coraz mniejszym zestawem danych, aż osiągnie warunek zatrzymania bazy.", isCorrect: true },
            { text: "Sytuację gdy sprzętowy procesor podaje sygnał z pamięci na zewnątrz RAM'u z przekroczeniem.", isCorrect: false },
            { text: "Jest to inna definicja na metodę wpisywania zmiennej pod wskaźnik.", isCorrect: false },
            { text: "Użycie zewnętrznych bibliotek dla skompilowania obiektu PRAM.", isCorrect: false }
        ]
    },
    {
        id: 617,
        category: "Podstawy: Rekurencja",
        text: "Z jakiego fundamentalnego powodu z rekurencją i pętlami można w ogóle łatwo stworzyć zjawisko znane z błędu informatycznego jako 'Stack Overflow' (Przepełnienie Stosu)?",
        options: [
            { text: "Jeżeli funkcja nie posiada tzw. punktu bazy lub warunku zatrzymania (stopu), to wywołuje sama siebie w nieskończoność tworząc ramki, które szybko pochłoną wyznaczony mały przydział wolnej pamięci stosowej programu i go załamią.", isCorrect: true },
            { text: "Ponieważ pętle nie mają przypisanej i odgórnie zdefiniowanej struktury klasy LIFO.", isCorrect: false },
            { text: "Odrzucenie elementu i użycie zapisu CRCW niszczy bazę RAM.", isCorrect: false },
            { text: "Z powodu błędu implementacyjnego przy wpisaniu słowa EOF do LZW bez słownika.", isCorrect: false }
        ]
    },

    // --- NAZEWNICTWO ANGLOJĘZYCZNE (PODSTAWOWE) ---
    {
        id: 618,
        category: "Terminologia",
        text: "Do jakiego algorytmu i metody odnosi się najczęściej termin z książek anglojęzycznych 'Greedy Algorithm'?",
        options: [
            { text: "Do Algorytmów Zachłannych – polegających na dokonywaniu wyboru, który w danym ułamku sekundy wydaje się obiecująco najbardziej opłacalny 'tu i teraz' bez spoglądania w odległe prognozy.", isCorrect: true },
            { text: "Do algorytmów operujących i zrzucających zera w siatkach wektorowych bez powrotów.", isCorrect: false },
            { text: "Oznacza algorytmy losowe od Randomized i odwołujące elementy do buforów PRAM.", isCorrect: false },
            { text: "Do algorytmów brutalnej siły poszukujących odpowiedzi po wszystkich elementach w czasie silni.", isCorrect: false }
        ]
    },
    {
        id: 619,
        category: "Terminologia",
        text: "Gdy mowa o operacjach drzewiastych czy słownikowych, co definiuje kluczowe słowo 'Insert'?",
        options: [
            { text: "Odpowiada za czynność umieszczenia (dodania/wstawienia) nowego rekordu lub węzła ze zdefiniowanym kluczem we właściwe miejsce do posiadanej struktury.", isCorrect: true },
            { text: "Odszukanie konkretnego elementu i wydobycie go by skompensować wielkość i rzut struktury.", isCorrect: false },
            { text: "Jest poleceniem wymuszającym kasację i zgaszenie w bazie obiektu z wejścia do u.", isCorrect: false },
            { text: "Rotację wektora i odcięcie ujemnego znaku od błędu po relaksacji wejścia.", isCorrect: false }
        ]
    },

    // --- UZUPEŁNIENIE BAZY ---
    {
        id: 620,
        category: "Wstęp do Algorytmiki",
        text: "Kiedy można powiedzieć, że nowo napisany algorytm komputerowy jest absolutnie 'poprawny'?",
        options: [
            { text: "Gdy zatrzymuje się w końcu w przewidywalnym czasie i podaje bezsprzecznie oczekiwany, bezbłędny dla wszystkich instancji problemu z danych i poprawny matematycznie wynik.", isCorrect: true },
            { text: "Gdy skompiluje się bez błędów typu Syntax Error w wiodącym konsolowym ułożeniu.", isCorrect: false },
            { text: "Gdy udowodniono mu optymalną wartość czasu wielomianowego dla instrukcji pętli PRAM.", isCorrect: false },
            { text: "Gdy pominie sprawdzenie i uruchomi wszystkie obwody na sprzętowych matrycach maszyny.", isCorrect: false }
        ]
    },
    {
        id: 621,
        category: "Wstęp do Złożoności",
        text: "Czego wynikiem we wzorze na złożoności jest tzw. 'Czynnik Dominujący' na przykład w matematycznym równaniu na czas w ujęciu $T(n) = 3n^2 + 5n + 100$?",
        options: [
            { text: "Jest to funkcja członu, która rośnie najszybciej, co oznacza że to element kwadratowy $3n^2$, który w ujęciu asymptotyki Big O determinuje uproszczony czas na formę po zrzuceniu stałych jako złożoność $O(n^2)$.", isCorrect: true },
            { text: "Jest to liczba $100$, ponieważ daje na starcie dla pierwszych wartości pętli najwyższy stały pułap kosztowy do wykonania.", isCorrect: false },
            { text: "Rozkłada się po osi symetrii dając złożoność dla elementu na wektor w rzędzie dając $\\log n$.", isCorrect: false },
            { text: "Brak czynnika pod względem uproszczenia bo wzór nie jest sprowadzalny z racji braku operacji dzielącej na węźle dla u.", isCorrect: false }
        ]
    },
    {
        id: 622,
        category: "Wstęp do Algorytmiki",
        text: "Do weryfikacji i oszacowania działania u algorytmów bez wglądu na specyfikację i siłę szybkiej maszyny (procesora), używamy matematycznego skrótu by pominąć zmienne zewnętrzne dla maszyny. Jak się ten proces formalnie nazywa?",
        options: [
            { text: "Analiza asymptotyczna – upraszcza ona wzory pomijając mało znaczące składowe (np. stałe czasowe czy słabsze wyrazy z ułamka), koncentrując ocenę u skalarności rozrostu danych na $n \\rightarrow \\infty$.", isCorrect: true },
            { text: "Kompilatorowe badanie cykli z użyciem narzędzi diagnostycznych z weryfikacją na żywo w czasie 1 sekundy.", isCorrect: false },
            { text: "Szeregowanie algorytmów pod taksonomię układu wejścia-wyjścia by ustalić przepływy u sprzętu.", isCorrect: false },
            { text: "Dekompozycja na podrzędne grafy z rozrostem dla operacji wektorowych i wymuszeniu zapisu CRCW.", isCorrect: false }
        ]
    },
    {
        id: 623,
        category: "Podstawy Drzew",
        text: "Gdy w Drzewie Binarnym podpinamy na pozycje dzieci mniejsze układy z węzłów i gałęzi to układ odgałęzienia lewego poniżej wybranego wierzchołka nazywamy klasycznie dla form teorii:",
        options: [
            { text: "Lewym poddrzewem.", isCorrect: true },
            { text: "Lewą strukturą liści powrotnych.", isCorrect: false },
            { text: "Węzłowym elementem poprzecznym.", isCorrect: false },
            { text: "Lewym Cyklem.", isCorrect: false }
        ]
    },
    {
        id: 624,
        category: "Podstawy Algorytmiki",
        text: "Kiedy najczęściej decydujemy się użyć struktury reprezentującej Kolejkę do zadań nadzorujących elementy w tle dla pamięci na odkładaniu programu?",
        options: [
            { text: "Kiedy musimy i chcemy podtrzymać sprawiedliwe zadbanie i rozpatrywanie ujęć o równe wdrożenia zasobów z wykluczeniem i trzymaniem porządku 'ten który przyszedł pierwszy otrzyma zasób pierwszy'.", isCorrect: true },
            { text: "Gdy potrzebny ucięty zostaje wynik zapętlenia a zależy nam, by pobrać z bloku do tyłu i otrzymać świeżo dodany błąd najpierw pod LIFO.", isCorrect: false },
            { text: "Z uwagi dla wbudowania pod zrandomizowany układ o elementach u wektora i rzutu wymusza to układ FIFO od końca.", isCorrect: false },
            { text: "Na wymóg wyciagnięcia tylko minimum dla kopców priorytetu bez wag.", isCorrect: false }
        ]
    },
    {
        id: 625,
        category: "Złożoność Obliczeniowa",
        text: "Zapis z asymptoty $\\Theta(1)$ jest nazywany i ułożony w słowniku u algorytmiki czasem...",
        options: [
            { text: "Czasem stałym – program na taką operację poświeci określoną i pewną ilość czasu (kroków obliczeniowych) absolutnie niezależnie od tego ile giga bajtów czy węzłów jest podane z przodu na wejściu w strukturę i u wielkości wejścia $n$.", isCorrect: true },
            { text: "Czasem ułomnym - ponieważ zajmuje dokładnie równe 1 sekundę na obliczenie z wyjścia.", isCorrect: false },
            { text: "Czasem najdłuższym – 1 oznacza nieskończoną stałą operację pętli dając wyjście bez zwrotu pod wynik.", isCorrect: false },
            { text: "Czasem nieliniowym – z racji niepodpięcia z i za wektor do zapętlenia i z pnia od tyłu do u.", isCorrect: false }
        ]
    },
    {
        id: 626,
        category: "Wstęp",
        text: "Pojęcie zwane pseudokodem w algorytmice wykorzystuje się szeroko przed zapisaniem kodu do środowiska. Służy ono:",
        options: [
            { text: "Do luźnego z pominięciem językowych kruczków i reguł zapisu dla ludzkiego, uniwersalnego pokazania koncepcji u logicznego przebiegu zadania, często ułożonego obok ze wstawkami u zdań matematycznych i w języku naturalnym z ułatwieniem by zrozumiał go inny programista przed podjęciem programowania w np. Pythonie czy języku C++.", isCorrect: true },
            { text: "Jest to skompilowany wektor programu we wbudowanych językach z rozszerzeniem dającym uruchomienie po użyciu wejść konsolowych w Windows by usunąć błędy dla rzutów po OS-Tree.", isCorrect: false },
            { text: "Do wyliczania u grafu dla rzutu pod asymetryczne algorytmy o minimalnym przełożeniu w LZW z wbudowaniem pod drzewo binarne dla pamięci bez wejść.", isCorrect: false },
            { text: "Opisywania zadań tekstowych bez operacji i logiki dla ludzi bez umiejętności odczytu z wektorów dla komputera z wyłączeniem po C.", isCorrect: false }
        ]
    },
    {
        id: 627,
        category: "Podstawy Drzew",
        text: "Czym charakteryzuje się tak zwane Drzewo Pełne (Zupełne/Complete Binary Tree) u form od zarania drzew po kopcach z dwójką dzieci?",
        options: [
            { text: "To struktura, u której wszystkie poziomy rzutu i powielenia od korzenia wyłączając być może w 100% sam najniższy poziom dla liści posiadają wszystkie na sztywno ujęte węzły za wektor w wypełnieniu a sam najniższy z u rzutowanych na węzły liści dopięty jest skrajnie pod lewą flance w zapełnianiu.", isCorrect: true },
            { text: "Posiada wyznaczniki do prawego boku i układa po prawej skrajne węzły u roota ignorując lewy podział do wejścia.", isCorrect: false },
            { text: "To wyznacznik tego, że podrzędne elementy u węzła w z rzędem tworzą od razu kopiec dla wektora $O(n)$.", isCorrect: false },
            { text: "Każdy wezeł w drzewie ma przydzielone puste z wskaźników po wejściu dając potęgę d i d u bazy dla NIL.", isCorrect: false }
        ]
    },
    {
        id: 628,
        category: "Podstawy Algorytmiki",
        text: "Na czym opiera się iteracyjne podejście układania kodu pod algorytmy po przeciwnej i równoległej szali od pojęć po algorytmikę z użyciem samej uciętej wejściem z rekurencji?",
        options: [
            { text: "Na wykonaniu pod powtarzalne układem bloki u kroków od użycia pętli z wewnątrz np. bloków pętli 'for' albo od węzła po 'while' powtarzających te zdania i operacje na rzut by wyrobić wejście u stopu i z osiągnięciem zadanego po wejście z tyłu rezultatu po ukończeniu instrukcji.", isCorrect: true },
            { text: "Podejściem w wywołaniu funkcji rekurencyjnych po drzewie dających u wejść rzut stosu na błędy dla wywołania od i bez RAMu.", isCorrect: false },
            { text: "Opiera po wektorach i rzuca o 2 u procesorach dla symetrii pod użycia PRAM i wyciągnięcia operacji po z.", isCorrect: false },
            { text: "Ucinając wyraz na zmiennych i zmuszając do wyjścia z błędem w trybie asymetrycznym po wejściach u z i z.", isCorrect: false }
        ]
    },
    {
        id: 629,
        category: "Wstęp do Algorytmiki",
        text: "Złożoność pamięciowa określona przez notacje o asymetrycznym rzucie z wynikiem $\\Theta(1)$ wskazuje na:",
        options: [
            { text: "Zużycie od dodatkowej po wyjściu pamięci dla RAM dającej gwarantowane bezwarunkowe zablokowanie pod niewielką i z wejściem ustaloną, wyliczoną przed stałą dla u wielkość wektora przydziałowego co nie zmusza z z wejściem do podania większej pamięci przy nawet $n \\rightarrow \\infty$ przy dużym pliku czy grafie.", isCorrect: true },
            { text: "Niestabilne rzuty zużywające całą operacyjną pulę w modelu SISD u Flynna dając braki dla rzutu po logarytmie na $\\log n$.", isCorrect: false },
            { text: "Ograniczone asymetrycznie obciążenie do z wejścia 1 kilobajta u RAM i od 0 na wyciąg pamięci buforowej procesora przy węźle C.", isCorrect: false },
            { text: "Użycie tylko na odrzut w tablicy wynoszącym kwadrat od wektora z wejścia u $O(n^2)$.", isCorrect: false }
        ]
    },
    {
        id: 630,
        category: "Podstawowe Metody Wyszukiwania",
        text: "Z czego wyłania się pod kątem matematycznym z wydajności potężna u wydajności wektorowa korzyść przy wyszukaniu pod Wyszukiwaniem Binarnym, deklasująca Wyszukiwanie naiwne od Liniowych z ułożeń od $O(n)$?",
        options: [
            { text: "Korzyść pochodzi by i wyciąga z odcięcia połowy, od i dającego przedziału badawczego z użyciem warunku od posortowanej pod tablicy dając czas dążący po ułamku na $\\Theta(\\log n)$ operacji za jednym wejściowym elementem, co z n dążącym do dużej wielkości daje skrajnie małą potęgę operacji dając kilkadziesiąt wejść dla milionów rekordów u tablic.", isCorrect: true },
            { text: "Z uwagi za korzystania do przeskakiwania dając potęgę rzędu Radix pod wyciągnięcie i po $O(1)$.", isCorrect: false },
            { text: "Ograniczając wyjście od z użyciem kopca dającego wynik na u z i rzucając pętlę na $O(n \\log n)$.", isCorrect: false },
            { text: "Wyciąga w wyjście u użyciu potężnej operacji po grafie wejściowym na szyny u węzłów BFS.", isCorrect: false }
        ]
    }
    ];