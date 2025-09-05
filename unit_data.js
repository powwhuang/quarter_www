// 側邊選單結構 + units 一起定義
const unit_data = {
    "Classic DIP": {
        "Enhancement": {
            link:"./classic_DIP/enhancement.html",
            units:[
                {name:"Histogram Equalization",href:"./classic_DIP/histogram_equalization.html"},
                {name:"Histogram Matching",href:"./classic_DIP/histogram_matching.html"}
            ]
        },
        
        "Segmentation": {
            link:"page2.html",
            units:[
                {name:"Otsu Thresholding",href:"#"},
                {name:"Two-Pass Connected Component Labeling",href:"#"},
                {name:"Graph Segmentation",href:"#"},
                {name:"Interactive Graph Cuts",href:"#"}
            ]
        },
        
        "Texture Feature": {
            link:"page2.html",
            units:[
                {name:"Haar-Like Feature",href:"#"},
                {name:"LBP: Local Binary Pattern",href:"#"},
                {name:"HOGs: Histogram of Oriented Gradients",href:"#"},
                {name:"HLID: Histogram of Local Intensity Difference",href:"#"}
            ]
        },
        
        "classification": {
            link:"page2.html",
            units:[
                {name:"SVM: Support Vector Machines",href:"#"}
            ]
        },

        "Tracking": {
            link:"page2.html",
            units:[
                {name:"Kalman Filter",href:"#"}
            ]
        }

    },
	
    "Classic Video Processing": {
        "Background Subtraction":{
            link: "page2.html",
            units:[
                {name:"Gaussian Mixture Models (GMM)",href:"#"},
                {name:"Real-time Foreground-Background Segmentation Using Codebook Model",href:"#"}
            ]
        }
    },
    
    "CNN DIP": {
        "Object Classification": {
            link:"page2.html",
            units:[
                {name:"RPN:Region Proposal Networks",href:"#"},
                {name:"FPN: Feature Pyramid Networks",href:"#"},
                {name:"Faster R-CNN",href:"#"}
            ]
        },
        "Object Detection": {
            link:"page2.html",
            units:[
                {name:"RPN:Region Proposal Networks",href:"#"},
                {name:"FPN: Feature Pyramid Networks",href:"#"},
                {name:"Faster R-CNN",href:"#"},
                {name:"You Only Look Once (YOLO v1): Unified Real-Time Object Detectio",href:"#"},                
            ]
        },
        
        "Instance Segmentation": {
            link:"page2.html",
            units:[
                {name:"Mask R-CNN",href:"#"},                
            ]
        }

        
    },
    
    "Recurrent Neural Network": {
        "Introduction": {
            link:"main.pdf",
            units:[
                {name:"Gentle Introduction",href:"#"}
            ]            
        }
    },
    
    "Reinforcement Learning": {
        "Introduction": {
            link:"main.pdf",
            units:[
                {name:"Gentle Introduction",href:"#"}
            ]            
        }
    }
};
