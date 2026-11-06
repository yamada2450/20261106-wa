Vue.createApp({
  data() {
    return {
      score: 75,
      standards: [
        {
          min: 90,
          max: 101,
          range: "90〜100点",
          grade: "A",
          status: "優秀",
          color: "grade-a",
          advice: "非常に優秀な成績です。応用問題にも挑戦して、さらに理解を深めましょう。"
        },
        
        {
          min: 80,
          max: 90,
          range: "80〜89点",
          grade: "B",
          status: "良好",
          color: "grade-b",
          advice: "よく理解できています。間違えた問題を復習して、満点を目指しましょう。"
        },
        
        {
          min: 70,
          max: 80,
          range: "70〜79点",
          grade: "c",
          status: "普通",
          color: "grade-c",
          advice: "基本的な内容は理解できています。苦手な分野を重点的に復習しましょう。"
        },
        
        {
          min: 60,
          max: 70,
          range: "60〜69点",
          grade: "d",
          status: "合格",
          color: "grade-d",
          advice: "合格ラインに到達しています。基礎を確認し、安定して得点できるようにしましょう。"
        },
        
        {
          min: 0,
          max: 60,
          range: "0〜59点",
          grade: "F",
          status: "不合格",
          color: "grade-f",
          advice: "基礎から復習しましょう。まずは合格ラインを目標に取り組みましょう。"
        },
        
      ]
    };
  },

  computed: {
  
    currentStandard() {
      return this.standards.find(item =>
        this.score >= item.min && this.score < item.max
      );
    },

    grade() {
      return this.currentStandard?.grade || "－";
    },

    status() {
      return this.currentStandard?.status || "判定できません";
    },

    advice() {
      return this.currentStandard?.advice || "0〜100の範囲で点数を入力してください。";
    },

    differenceMessage() {
      const difference = 60 - this.score;

      if (difference > 0) {
        return `合格ラインまであと${difference}点です`;
      }

      return "合格ラインをクリアしています";
    }
  }
}).mount("#app");