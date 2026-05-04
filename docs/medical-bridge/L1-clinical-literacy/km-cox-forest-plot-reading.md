# Kaplan-Meier、Cox 表和 forest plot 先看哪三件事？

> 先看事件数、效应量和曲线形状，再看 p 值。

## 先把词听懂

- Kaplan-Meier 曲线（KM curve）：估计随时间仍未发生事件的比例，例如仍存活或仍未进展的比例。
- 删失（censoring）：随访结束或失访时还没观察到事件，不等于没有事件。
- 风险表（number at risk）：每个时间点仍在随访且还可能发生事件的人数。
- 风险比（hazard ratio, HR）：两组在任一时刻发生事件的瞬时风险之比。
- Cox 比例风险模型（Cox proportional hazards model）：用协变量解释时间到事件数据的半参数模型。
- forest plot：把总体和亚组效应量及置信区间放在一张图里。

## 长答案

读 KM 图时，顺序应该是：

1. 看事件定义：OS、PFS、DFS 还是 EFS。
2. 看曲线是否分开、什么时候分开、是否交叉。
3. 看 number at risk：后半段人数很少时，尾部曲线不稳。
4. 看中位生存期和固定时间点生存率。
5. 最后才看 HR、95% CI 和 p 值。

<figure class="source-figure" markdown="1">
![Kaplan-Meier sample plot](https://upload.wikimedia.org/wikipedia/commons/f/f9/Kaplan-Meier-sample-plot.svg)
<figcaption><strong>真实图例。</strong>Kaplan-Meier sample plot，Accountalive / Soul windsurfer，CC0，Wikimedia Commons。黑色标记表示删失，阶梯下降来自事件发生。来源：<a href="https://commons.wikimedia.org/wiki/File:Kaplan-Meier-sample-plot.svg">Wikimedia Commons</a>，访问日期 2026-05-04。</figcaption>
</figure>

Cox 表要看四件事：

- HR 点估计：小于 1 通常表示实验组事件风险较低，大于 1 表示较高。
- 95% CI：是否跨 1，宽不宽。
- 协变量：年龄、分期、ECOG、治疗线数、关键分子分型是否纳入。
- 事件数：事件太少时，多变量模型会不稳。粗略说事件数 <50 时要很谨慎；若每个协变量事件数太少，过拟合风险很高。

Forest plot 常用于亚组分析。它不是“哪些亚组显著”，而是看方向是否一致、交互检验是否支持亚组差异、置信区间是否宽到不可解释。

<figure class="source-figure" markdown="1">
![Generic forest plot](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Generic_forest_plot.png/330px-Generic_forest_plot.png)
<figcaption><strong>真实图例。</strong>Generic forest plot，Wikimedia Commons。方块大小代表权重，横线代表置信区间，菱形代表合并效应。来源：<a href="https://en.wikipedia.org/wiki/Forest_plot">Wikipedia / Wikimedia Commons</a>，访问日期 2026-05-04。</figcaption>
</figure>

## 为什么这么设计 / 为什么临床会这样问

临床医生读生存图，是为了判断治疗是否带来真实、有意义、可外推的获益。p 值只回答“如果没有差异，看到这么极端数据的概率有多小”；它不告诉你差异是否大、是否持续、是否被少数尾部样本驱动，也不告诉你是否适用于某个具体病人。

比例风险假设尤其重要。若两条 KM 曲线明显交叉，单一 HR 会把早期伤害和晚期获益压成一个平均数，解释会变危险。这类情况可能需要限制均值生存时间（restricted mean survival time, RMST）或分段分析。

## 组学翻译

如果组学课题要把某个细胞亚群或基因 signature 与 PFS/OS 关联，Peter 要先检查：

- 事件数是否够支持 Cox 模型。
- signature 是预先定义还是数据里挑出来的。
- 是否用训练集/验证集或交叉验证。
- 是否调整了分期、治疗线数、ECOG、关键突变等临床协变量。
- KM 分组阈值是预先指定还是按最优 cutpoint 事后挑选。

组学 signature 最常见的夸大方式，就是在小样本中反复试阈值，然后画一张看似漂亮的 KM 曲线。

## ⚠️ 容易混淆 / 常见误解

**误解 1：HR=0.5 表示中位生存期翻倍。**  
不一定。HR 是瞬时风险比，不是时间长度比；曲线形状不同，中位数关系也不同。

**误解 2：亚组 forest plot 里某一行 p<0.05 就说明这个亚组特殊。**  
不对。要看交互检验和多重比较风险，不能只看某一行是否跨 1。

**误解 3：KM 曲线尾部翘起来很有意义。**  
常常不稳。尾部 number at risk 很少时，少数删失或事件会让曲线看起来很戏剧化。

## 横向连接

- [[medical-bridge/L1-clinical-literacy/oncology-endpoints-os-pfs-orr-dor]]
- [[medical-bridge/L1-clinical-literacy/pico-clinical-question]]
- [[_concepts/multiple-testing-frameworks]]

## 我现在的理解状态

`#待 Peter 确认`

## 参考

- Kaplan & Meier (1958), *Journal of the American Statistical Association*.
- Cox (1972), *Journal of the Royal Statistical Society: Series B*.
- Lewis & Clarke (2001), *BMJ* — Forest plots: trying to see the wood and the trees.
- Wikimedia Commons, Kaplan-Meier sample plot, accessed 2026-05-04: https://commons.wikimedia.org/wiki/File:Kaplan-Meier-sample-plot.svg
- Wikipedia/Wikimedia Commons, Forest plot, accessed 2026-05-04: https://en.wikipedia.org/wiki/Forest_plot
